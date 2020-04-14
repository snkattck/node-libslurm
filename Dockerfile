ARG SLURM_TAG=slurm-20-02-1-1
FROM snkattck/slurm-docker-cluster:${SLURM_TAG}
ENV NODE_VERSION=12.16.2
RUN useradd -ms /bin/bash app
USER app
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash && \
    export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" && \
    nvm use ${NODE_VERSION}
USER root
    
