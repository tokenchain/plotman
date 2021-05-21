# Xman: another Chia plotting manager

This is a tool for managing [Chia](https://github.com/Chia-Network/chia-blockchain)
plotting operations.  The tool runs on the plotting machine and provides
the following functionality:

- Automatic spawning of new plotting jobs, possibly overlapping ("staggered")
  on multiple temp directories, rate-limited globally and by per-temp-dir
limits.

- Rsync'ing of newly generated plots to a remote host (a farmer/harvester),
  called "archiving".

- Monitoring of ongoing plotting and archiving jobs, progress, resources used,
  temp files, etc.

- Control of ongoing plotting jobs (suspend, resume, plus kill and clean up
  temp files).

- Both an interactive live dashboard mode as well as command line mode tools.

- (very alpha) Analyzing performance statistics of past jobs, to aggregate on
  various plotting parameters or temp dir type.

Plotman is designed for the following configuration:

- A plotting machine with an array of `tmp` dirs, a single `tmp2` dir, and an
  array of `dst` dirs to which the plot jobs plot.  The `dst` dirs serve as a
temporary buffer space for generated plots.

- A farming machine with a large number of drives, made accessible via an
  `rsyncd` module, and to be entirely populated with plots.  These are known as
the `archive` directories.

- Plot jobs are run with STDOUT/STDERR redirected to a log file in a configured
directory.  This allows analysis of progress (plot phase) as well as timing
(e.g. for analyzing performance).

## Functionality

Plotman tools are stateless.  Rather than keep an internal record of what jobs
have been started, Plotman relies on the process tables, open files, and
logfiles of plot jobs to understand "what's going on".  This means the tools
can be stopped and started, even from a different login session, without loss
of information.  It also means Plotman can see and manage jobs started manually
or by other tools, as long as their STDOUT/STDERR redirected to a file in a
known logfile directory.  (Note: The tool relies on reading the chia plot
command line arguments and the format of the plot tool output.  Changes in
those may break this tool.)

Plot scheduling is done by waiting for a certain amount of wall time since the
last job was started, finding the best (e.g. least recently used) `tmp` dir for
plotting, and ensuring that job has progressed to at least a certain point
(e.g., phase 2, subphase 5).

Plots are output to the `dst` dirs, which serve as a temporary buffer until they
are rsync'd ("archived") to the farmer/harvester.  The archiver does several
things to attempt to avoid concurrent IO.  First, it only allows one rsync
process at a time (more sophisticated scheduling could remove this
restriction, but it's nontrivial).  Second, it inspects the pipeline of plot
jobs to see which `dst` dirs are about to have plots written to them.  This
is balanced against how full the `dst` drives are in a priority scheme.

It is, obviously, necessary that your rsync bandwidth exceeds your plotting
bandwidth.  Given this, in normal operation, the `dst` dirs remain empty until
a plot is finished, after which it is shortly thereafter picked up by the
archive job.  However, the decoupling provided by using `dst` drives as a
buffer means that should the farmer/harvester or the network become
unavailable, plotting continues uninterrupted.

## Screenshot Overview

The screenshot shows some of the main features of Plotman.

The first line shows the status.  The plotting status shows whether we just
started a plot, or, if not, why not (e.g., stagger time, tmp directories being
ready, etc.; in this case, the 1800s stagger between plots has not been reached
yet).  Archival status says whether we are currently archiving (and provides
the `rsync` pid) or whether there are no plots available in the `dst` drives to
archive.

The second line provides a key to some directory abbrevations used throughout.
For `tmp` and `dst` directories, we assume they have a common prefix, which is
computed and indicated here, after which they can be referred to (in context)
by their unique suffix.  For example, if we have `tmp` dirs `/mnt/tmp/00`,
`/mnt/tmp/01`, `/mnt/tmp/02`, etc., we show `/mnt/tmp` as the prefix here and
can then talk about `tmp` dirs `00` or `01` etc.  The `archive` directories are
the same except that these are paths on a remote host and accessed via an
`rsyncd` module (see `src/plotman/resources/plotman.yaml` for details).

The next table shows information about the active plotting jobs.  It is
abbreviated to show the most and least recently started jobs (the full list is
available via the command line mode).  It shows various information about the
plot jobs, including the plot ID (first 8 chars), the directories used,
walltime, the current plot phase and subphase, space used on the `tmp` drive,
pid, etc.

The next tables are a bit hard to read; there is actually a `tmp` table on the
left which is split into two tables for rendering purposes, and a `dst` table
on the right.  The `tmp` tables show the phases of the plotting jobs using
them, and whether or not they're ready to take a new plot job.  The `dst` table
shows how many plots have accumulated, how much free space is left, and the
phases of jobs that are destined to write to them, and finally, the priority
computed for the archive job to move the plots away.

The last table simply shows free space of drives on the remote
harverster/farmer.

Finally, the last section shows a log of actions performed -- namely, plot and
archive jobs initiated.  This is the one part of the interactive tool which is
stateful.  There is no permanent record of these executed command lines, so if
you start a new interactive plotman session, this log is empty.

## Limitations and Issues

The system is tested on Linux only.  Plotman should be generalizable to other
platforms, but this is not done yet.  Some of the issues around making calls
out to command line programs (e.g., running `df` over `ssh` to obtain the free
space on the remote archive directories) are very linux-y.

The interactive mode uses the `curses` library ... poorly.  Keypresses are
not received, screen resizing does not work, and the minimum terminal size
is pretty big.

Plotman assumes all plots are k32s.  Again, this is just an unimplemented
generalization.

Many features are inconsistently supported between either the "interactive"
mode or the command line mode.

There are many bugs and TODOs.

Plotman will always look for the `plotman.yaml` file within your computer at an OS-based
default location. To generate a default `plotman.yaml`, run:
```shell
> plotman config generate
```

To display the current location of your `plotman.yaml` file and check if it exists, run:
```shell
> plotman config path
```

([See also](https://github.com/ericaltendorf/plotman/pull/61#issuecomment-812967363)).

## Installation

Installation for Linux:

1. Plotman assumes that a functioning [Chia](https://github.com/Chia-Network/chia-blockchain)
   installation is present on the system. Activate your `chia` environment by typing
   `source /path/to/your/chia/install/activate`.
2. Then, install Plotman using the following command:
   ```shell
    pip install --force-reinstall git+https://github.com/ericaltendorf/plotman@main
    ```
   
   With the new installation we can install this
   or with this
   ```shell
    python3 -m pip install plotmanx
   ```
   
3. Plotman will look for `plotman.yaml` within your computer at an OS-based
   default location. To create a default `plotman.yaml` and display its location,
   run the following command:
   ```shell
   plotman config generate
   ```
   The default configuration file used as a starting point is located [here](src/plotmanx/resources/plotman.yaml)
4. That's it! You can now run Plotman by typing `plotman version` to verify its version.
   Run `plotman --help` to learn about the available commands.

### Development note:

If you are forking Plotman, simply replace the installation step with `pip install --editable .[dev]` from the project root directory to install *your* version of plotman with test and development extras.


# Maintenance

## Overview

This document holds guidance on maintaining aspects of plotman.

## Using docker

https://gist.github.com/snikch/ab15159e633d21619bdf6a056bec8830


## The `chia plots create` CLI parsing code

In [src/plotman/chia.py](src/plotman/chia.py) there is code copied from the `chia plots create` subcommand's CLI parser definition.
When new versions of `chia-blockchain` are released, their interface code should be added to plotman.
plotman commit [1b5db4e](https://github.com/ericaltendorf/plotman/commit/1b5db4e342b9ec1f7910663a453aec3a97ba51a6) provides an example of adding a new version.

In many cases, copying code is a poor choice.
It is believed that in this case it is appropriate since the chia code that plotman could import is not necessarily the code that is parsing the plotting process command lines anyways.
The chia command could come from another Python environment, a system package, a `.dmg`, etc.
This approach also offers future potential of using the proper version of parsing for the specific plot process being inspected.
Finally, this alleviates dealing with the dependency on the `chia-blockchain` package.
In generally, using dependencies is good.
This seems to be an exceptional case.

