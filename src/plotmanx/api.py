#!/usr/bin/python
#
import os

import requests
from flask import Flask
from plotmanx.reporting import abbr_path, phase_str
from prometheus_client.core import GaugeMetricFamily

from . import configuration
from . import job, plot_util
from .configuration import PlotmanConfig
from .job import Job


def jsondata(jobs, tmp_prefix='', dst_prefix=''):
    jobsr = list()
    for i, j in enumerate(sorted(jobs, key=job.Job.get_time_wall)):
        with j.proc.oneshot():
            dictionary = {
                'plotid': j.plot_id[:8],
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
                'logfile': os.path.basename(j.logfile)
            }
            jobsr.append(dictionary)


def apiOpen(cfg: PlotmanConfig):
    appc = Flask(__name__)
    # appc.add_url_rule('status', '/status')
    # appc.view_functions['status'] = status
    print("api port %s is now listening".format(cfg.apis.port))
    appc.run(host="0.0.0.0", port=cfg.apis.port)


def PostDat(dp: dict, cfg: PlotmanConfig):
    # sending post request and saving response as response object
    r = requests.post(url=f'{cfg.apis.target_report_hook}:{cfg.apis.port}/report', data=dp)
    print(r.text)


class PlotmanCollector:

    def collect(self):
        cfg = configuration.get_validated_configs()
        jobs = Job.get_running_jobs(cfg.directories.log)
        count = len(sorted(jobs, key=job.Job.get_time_wall))
        yield GaugeMetricFamily("plotman_jobs_count", "Number of plotting jobs running", value=count)


"""
if __name__ == "__main__":
    start_http_server(8001)
    REGISTRY.register(PlotmanCollector())
    while True:
        time.sleep(1)
"""
