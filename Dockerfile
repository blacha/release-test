FROM alpine

ARG GIT_VERSION
ARG GIT_HASH

ENV GIT_VERSION ${GIT_VERSION}
ENV GIT_HASH ${GIT_HASH}


RUN ["echo", "${GIT_VERSION} - ${GIT_HASH}"]