# node-libslurm

## a nodejs interface to libslurm using N-API

node-libslurm is a NodeJS interface to  the C libslurm library for SlurmWLM <https://slurm.schedmd.com/>.

Currently, it can return the API version of Slurm as well as print out descriptions of each node in the cluster. At this point, this repository exists
primarily as a proof of concept, but, it does, in fact, do something!

My overall goal here is to link most of Slurm's API <https://slurm.schedmd.com/api.html> with NodeJS
in order to integrate Slurm functions into some kind of REST API.

This project is built against the Slurm version in ```.slurmrc```.

## building and using

This will only build in Linux as of now. Use the included Makefile to construct a Linux dev environment.

Run ```make buildenv```

This will start a simple Slurm cluster consisting of two docker nodes, a submit node, database, and Slurm DB controller as well as a development environment entrypoint.

The node-libslurm directory is mounted as ```/home/app/node-libslurm``` inside the slurmctld container.

Run ```make shell``` to get a shell in the container.

Run ```npm install; node example.js``` from inside the shell.

```bash
[app@slurmctld node-libslurm]$ LD_PRELOAD=libslurm.so node example.js 
2293760
c1
x86_64
```

FIXME: I think I need to fix gyp configuration such that ```LD_PRELOAD``` is not necessary..

The above API version is returned from the libslurm C library.

## contributions

contributions welcome.
