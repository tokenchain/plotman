import datetime
import operator
import os
import subprocess

import pendulum
import psutil

from .configuration import Scheduling, Directories, Plotting
from .job import Job, job_phases_for_tmpdir
from .manager import phases_permit_new_job

# Plotman libraries

MIN = 60  # Seconds
HR = 3600  # Seconds
MAX_PLOT_SIZE = 332  # Minimum gb required for k32 plot
MAX_AGE = 1000_000_000  # Arbitrary large number of seconds


class MintJ:
    def __init__(self, plotting_cfg: Plotting):
        self.parallel = 0
        self.cpu_clock = 0
        self.youngest_job_age = 0
        self.global_stagger = 0
        self.global_max_jobs = 0
        self.global_stagger_m = 0
        self.wait_reason = None
        self.aging_reason = None
        self.jobs = None
        self.plotdaemon = False
        self.pcfg = plotting_cfg
        self.jIter = 0

    def Upcfg(self, schedule: Scheduling, plotting_cfg: Plotting):
        self.pcfg = plotting_cfg
        self.global_max_jobs = schedule.global_max_jobs
        self.global_stagger_m = schedule.global_stagger_m
        self.youngest_job_age = min(self.jobs, key=Job.get_time_wall).get_time_wall() if self.jobs else MAX_AGE
        self.global_stagger = int(self.global_stagger_m[self.cpu_clock] * MIN)

    def GenJobs(self, dir_cfg: Directories):
        self.jobs = Job.get_running_jobs(dir_cfg.log)

    def CacheGenJobs(self, dir_cfg: Directories):
        self.jobs = Job.get_running_jobs(dir_cfg.log, cached_jobs=self.jobs)

    @property
    def WaitLog(self) -> str:
        return self.wait_reason

    @property
    def LsJobs(self) -> list:
        return self.jobs

    @property
    def isClockReady(self) -> bool:
        return self.youngest_job_age < self.global_stagger

    @property
    def isCreateNewJobParallelReady(self) -> bool:
        return self.youngest_job_age > self.global_stagger or len(self.jobs) == 0

    def JobCreate(self, sched_cfg: Scheduling, dir_cfg: Directories):
        if psutil.cpu_percent(interval=10) > 99:
            self.wait_reason = 'cpu optimized!'

        elif self.isClockReady and self.parallel <= 1:
            self.wait_reason = 'stagger (%ds/%ds)' % (self.youngest_job_age, self.global_stagger)

        elif len(self.jobs) >= self.global_max_jobs:
            self.wait_reason = 'max jobs (%d)' % self.global_max_jobs

        else:

            tmp_to_all_phases = [(d, job_phases_for_tmpdir(d, self.jobs)) for d in dir_cfg.tmp]

            eligible = [(d, phases) for (d, phases) in tmp_to_all_phases
                        if phases_permit_new_job(phases, d, sched_cfg, dir_cfg)]

            rankable = [(d, phases[0]) if phases else (d, (999, 999)) for (d, phases) in eligible]

            if not eligible:
                self.wait_reason = 'no eligible tempdirs'
            else:
                # Plot to oldest tmpdir.
                tmpdir = max(rankable, key=operator.itemgetter(1))[0]
                # Select the dst dir least recently selected

                """ 
                (is_dst, dst_dir) = configuration.get_dst_directories(dir_cfg)
                   dstdir = ''
                   if is_dst:

                        dir2ph = {d: ph for (d, ph) in dstdirs_to_youngest_phase(jobs).items()
                                  if d in dst_dir}

                        unused_dirs = [d for d in dst_dir if d not in dir2ph.keys()]

                        if len(unused_dirs) > 0:
                            dstdir = random.choice(unused_dirs)
                        else:
                            dstdir = tmpdir
                """

                logfile = os.path.join(
                    dir_cfg.log, pendulum.now().isoformat(timespec='microseconds').replace(':', '_') + '.log'
                )

                plot_args = ['chia', 'plots', 'create',
                             '-k', str(self.pcfg.k),
                             '-r', str(self.pcfg.n_threads),
                             '-u', str(self.pcfg.n_buckets),
                             '-b', str(self.pcfg.job_buffer),
                             '-n64',
                             '-t', tmpdir,
                             '-d', tmpdir]

                if self.pcfg.e:
                    plot_args.append('-e')

                if self.pcfg.farmer_pk is not None:
                    plot_args.append('-f')
                    plot_args.append(self.pcfg.farmer_pk)

                if self.pcfg.pool_pk is not None:
                    plot_args.append('-p')
                    plot_args.append(self.pcfg.pool_pk)

                if dir_cfg.tmp2 is not None:
                    plot_args.append('-2')
                    plot_args.append(dir_cfg.tmp2)

                logmsg = ('Starting plot job: %s ; logging to %s' % (' '.join(plot_args), logfile))
                self.wait_reason = logmsg
                try:
                    open_log_file = open(logfile, 'x')
                except FileExistsError:
                    # The desired log file name already exists.  Most likely another
                    # plotman process already launched a new process in response to
                    # the same scenario that triggered us.  Let's at least not
                    # confuse things further by having two plotting processes
                    # logging to the same file.  If we really should launch another
                    # plotting process, we'll get it at the next check cycle anyways.
                    self.wait_reason = (
                        f'Plot log file already exists, skipping attempt to start a'
                        f' new plot: {logfile!r}'
                    )
                    return False

                # start_new_sessions to make the job independent of this controlling tty.
                p = subprocess.Popen(plot_args,
                                     stdout=open_log_file,
                                     stderr=subprocess.STDOUT,
                                     start_new_session=True)

                psutil.Process(p.pid).nice(0)

                return True

        return False

    def PlotDaemon(self):
        self.plotdaemon = True

    def ParallelWorker(self, s: Scheduling, d: Directories):
        for i in range(self.parallel):
            sw = self.jIter % self.parallel
            g = (self.jIter - sw) / self.parallel
            self.cpu_clock = [0 if g % 2 == 0 else 1]
            started = self.JobCreate(s, d)
            self.jIter = self.jIter + 1
            if not self.plotdaemon:
                if started:
                    self.wait_reason = '<just started job>'
                    self.CacheGenJobs(d)
            else:
                ts = datetime.datetime.now().strftime('%m-%d %H:%M:%S')
                if self.wait_reason:
                    print('> %s, %s' % (ts, self.wait_reason))
                else:
                    print('start plot > %s' % ts)
