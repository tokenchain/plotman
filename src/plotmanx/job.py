# TODO do we use all these?
import contextlib
import os
from datetime import datetime

import psutil


from . import plot_util
from .analyzer import LogFile
from .reporting import abbr_path, phase_str


def job_phases_for_tmpdir(d, all_jobs) -> list:
    '''Return phase 2-tuples for jobs running on tmpdir d'''
    return sorted([j.progress() for j in all_jobs if j.tmpdir == d])


def job_phases_for_dstdir(d, all_jobs) -> list:
    '''Return phase 2-tuples for jobs outputting to dstdir d'''
    return sorted([j.progress() for j in all_jobs if j.dstdir == d])


def is_plotting_cmdline(cmdline) -> bool:
    return (
            len(cmdline) >= 4
            and 'python' in cmdline[0]
            and cmdline[1].endswith('/chia')
            and 'plots' == cmdline[2]
            and 'create' == cmdline[3]
    )


# This is a cmdline argument fix for https://github.com/ericaltendorf/plotman/issues/41
def cmdline_argfix(cmdline):
    known_keys = 'krbut2dnea'
    for i in cmdline:
        # If the argument starts with dash and a known key and is longer than 2,
        # then an argument is passed with no space between its key and value.
        # This is POSIX compliant but the arg parser was tripping over it.
        # In these cases, splitting that item up in separate key and value
        # elements results in a `cmdline` list that is correctly formatted.
        if i[0] == '-' and i[1] in known_keys and len(i) > 2:
            yield i[0:2]  # key
            yield i[2:]  # value
        else:
            yield i


# TODO: be more principled and explicit about what we cache vs. what we look up
# dynamically from the logfile
class Job:
    """
    Represents a plotter job

    """

    # These are constants, not updated during a run.
    k = 0
    r = 0
    u = 0
    b = 0
    n = 0  # probably not used
    tmpdir = ''
    tmp2dir = ''
    dstdir = ''
    logfilePath = ''

    proc = None  # will get a psutil.Process
    help = False

    # These are dynamic, cached, and need to be updated periodically
    phase = (None, None)  # Phase/subphase

    last_updated_time_in_min = 0

    @staticmethod
    def genTasks(logroot, cached_jobs=()) -> list:
        """
        Return a list of running plot jobs.  If a cache of preexisting jobs is provided,
        reuse those previous jobs without updating their information.  Always look for
        new jobs not already in the cache. If the job status is already finish or the storage
        is Zero then we need to make new
        job scanning
        """
        jobs = []
        cached_jobs_by_pid = {j.proc.pid: j for j in cached_jobs}

        for proc in psutil.process_iter(['pid', 'cmdline']):
            # Ignore processes which most likely have terminated between the time of
            # iteration and data access.
            with contextlib.suppress(psutil.NoSuchProcess, psutil.AccessDenied):
                if is_plotting_cmdline(proc.cmdline()):
                    if proc.pid in cached_jobs_by_pid.keys():
                        cached_job = cached_jobs_by_pid[proc.pid]
                        if cached_job.get_tmp_usage() == 0:
                            try:
                                job1 = Job(proc, logroot)
                                if not job1.help:
                                    jobs.append(job1)
                            except Exception as e:
                                jobs.append(cached_job)
                        else:
                            jobs.append(cached_job)
                    else:
                        try:
                            job2 = Job(proc, logroot)
                            if not job2.help:
                                jobs.append(job2)
                        except Exception as e:
                            print("Error:", e)
                            pass

        return jobs

    def __init__(self, proc, logroot):
        '''Initialize from an existing psutil.Process object.  must know logroot in order to understand open files'''
        self.proc = proc
        self.zLogFile = None

        with self.proc.oneshot():
            # Parse command line args
            args = self.proc.cmdline()
            assert len(args) > 4
            assert 'python' in args[0]
            assert 'chia' in args[1]
            assert 'plots' == args[2]
            assert 'create' == args[3]
            args_iter = iter(cmdline_argfix(args[4:]))
            for arg in args_iter:
                val = None if arg in {'-e', '--nobitfield', '-h', '--help', '--override-k'} else next(args_iter)
                if arg in {'-k', '--size'}:
                    self.k = val
                elif arg in {'-r', '--num_threads'}:
                    self.r = val
                elif arg in {'-b', '--buffer'}:
                    self.b = val
                elif arg in {'-u', '--buckets'}:
                    self.u = val
                elif arg in {'-t', '--tmp_dir'}:
                    self.tmpdir = val
                elif arg in {'-2', '--tmp2_dir'}:
                    self.tmp2dir = val
                elif arg in {'-d', '--final_dir'}:
                    self.dstdir = val
                elif arg in {'-n', '--num'}:
                    self.n = val
                elif arg in {'-h', '--help'}:
                    self.help = True
                elif arg in {'-e', '--nobitfield', '-f', '--farmer_public_key', '-p', '--pool_public_key', '-a', '--alt_fingerprint'}:
                    pass
                    # TODO: keep track of these
                elif arg == '--override-k':
                    pass
                else:
                    print('Warning: unrecognized args: %s %s' % (arg, val))

            # Find logfile (whatever file is open under the log root).  The
            # file may be open more than once, e.g. for STDOUT and STDERR.
            for f in self.proc.open_files():
                if logroot in f.path:
                    if self.logfilePath:
                        assert self.logfilePath == f.path
                    else:
                        self.logfilePath = f.path
                    break

            if self.logfilePath:
                self.zLogFile = LogFile(self.logfilePath)
                self.zLogFile.init_logfile()
                self.check_freeze()
            else:
                print('Found plotting process PID {pid}, but could not find '
                      'logfile in its open files:'.format(pid=self.proc.pid))
                for f in self.proc.open_files():
                    print(f.path)

    def check_freeze(self) -> None:
        assert self.logfilePath
        updatedAt = os.path.getmtime(self.logfilePath)
        now = datetime.now().timestamp()
        self.last_updated_time_in_min = int((now - updatedAt) / 60)

    def progress(self):
        """
        Return a 2-tuple with the job phase and subphase (by reading the logfile)
        """
        return self.zLogFile.getPhase

    @property
    def plot_id_prefix(self) -> str:
        return self.zLogFile.getPlotIdShort

    # TODO: make this more useful and complete, and/or make it configurable
    def status_str_long(self) -> str:
        return '{plot_id}\nk={k} r={r} b={b} u={u}\npid:{pid}\ntmp:{tmp}\ntmp2:{tmp2}\ndst:{dst}\nlogfile:{logfile}'.format(
            plot_id=self.plot_id_prefix,
            k=self.k,
            r=self.r,
            b=self.b,
            u=self.u,
            pid=self.proc.pid,
            tmp=self.tmpdir,
            tmp2=self.tmp2dir,
            dst=self.dstdir,
            logfile=self.zLogFile.path
        )

    def get_mem_usage(self):
        return self.proc.memory_info().vms  # Total, inc swapped

    def get_tmp_usage(self) -> int:
        total_bytes = 0
        with os.scandir(self.tmpdir) as it:
            for entry in it:
                if self.zLogFile.getPlotIdFull in entry.name:
                    try:
                        total_bytes += entry.stat().st_size
                    except FileNotFoundError:
                        # The file might disappear; this being an estimate we don't care
                        pass
        return total_bytes

    def get_run_status(self) -> str:
        """
        Running, suspended, etc.

        """
        status = self.proc.status()
        if status == psutil.STATUS_RUNNING:
            return 'RUN'
        elif status == psutil.STATUS_SLEEPING:
            return 'SLP'
        elif status == psutil.STATUS_DISK_SLEEP:
            return 'DSK'
        elif status == psutil.STATUS_STOPPED:
            return 'STP'
        else:
            return self.proc.status()

    def get_time_wall(self) -> int:
        create_time = datetime.fromtimestamp(self.proc.create_time())
        return int((datetime.now() - create_time).total_seconds())

    def get_time_user(self) -> int:
        return int(self.proc.cpu_times().user)

    def get_time_sys(self) -> int:
        return int(self.proc.cpu_times().system)

    def get_time_iowait(self) -> int:
        cpu_times = self.proc.cpu_times()
        iowait = getattr(cpu_times, 'iowait', None)
        if iowait is None:
            return 0

        return int(iowait)

    def suspend(self, reason=''):
        self.proc.suspend()
        self.status_note = reason

    def resume(self):
        self.proc.resume()

    def get_temp_files(self):
        # Prevent duplicate file paths by using set.
        temp_files = set([])
        for f in self.proc.open_files():
            if self.tmpdir in f.path or self.tmp2dir in f.path or self.dstdir in f.path:
                temp_files.add(f.path)
        return temp_files

    def toJson(self) -> dict:
        return dict(
            plot_id=self.zLogFile.getPlotIdShort,
            plot_idf=self.zLogFile.getPlotIdFull,
            k=self.k,
            r=self.r,
            b=self.b,
            u=self.u,
            pid=self.proc.pid,
            tmp=self.tmpdir,
            tmp2=self.tmp2dir,
            dst=self.dstdir,
            logfile=self.logfilePath
        )

    def cancel(self):
        'Cancel an already running job'
        # We typically suspend the job as the first action in killing it, so it
        # doesn't create more tmp files during death.  However, terminate() won't
        # complete if the job is supsended, so we also need to resume it.
        # TODO: check that this is best practice for killing a job.
        self.proc.resume()
        self.proc.terminate()


def report_jdata(jobs, tmp_prefix='', dst_prefix='') -> list:
    jobsr = list()
    for i, j in enumerate(sorted(jobs, key=Job.get_time_wall)):
        with j.proc.oneshot():
            dictionary = {
                'plotid': j.plot_id_prefix,
                'k': j.k,
                'tmp': abbr_path(j.tmpdir, tmp_prefix),
                'dst': abbr_path(j.dstdir, dst_prefix),
                'wall': plot_util.time_format(j.get_time_wall()),
                'phase': phase_str(j.progress()),
                'tmpdisk': plot_util.human_format(j.get_tmp_usage(), 0),
                'pid': j.proc.pid,
                'stat': j.get_run_status(),
                'mem': plot_util.human_format(j.get_mem_usage(), 1),
                'user': plot_util.time_format(j.get_time_user()),
                'sys': plot_util.time_format(j.get_time_sys()),
                'io': plot_util.time_format(j.get_time_iowait()),
                'freezed': plot_util.is_freezed(j),
                'logfile': os.path.basename(j.logfilePath)
            }
            jobsr.append(dictionary)

    return jobsr
