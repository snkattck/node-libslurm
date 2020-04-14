# default build target
all::

all:: buildenv
.PHONY: all

export SLURM_TAG:=$(shell cat .slurmrc)
export NODE_VERSION:=$(shell cat .nvmrc)

# Check Make version (we need at least GNU Make 3.82). Fortunately,
# 'undefine' directive has been introduced exactly in GNU Make 3.82.
ifeq ($(filter undefine,$(value .FEATURES)),)
$(error Unsupported Make version. \
    The build system does not work properly with GNU Make $(MAKE_VERSION), \
    please use GNU Make 3.82 or above.)
endif

buildenv:
	docker-compose up -d

shell:
	docker exec -u app -w /home/app/node-libslurm -i -t slurmctld /bin/bash
