# This builds an all-in-one easy to install dockerfile

FROM       python:3.6.8
MAINTAINER Kwola <info@kwola.io>


ENV DEBIAN_FRONTEND noninteractive
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash


# Install some basic system dependencies
RUN apt-get update && apt-get install \
    nginx \
    supervisor \
    nodejs -y  && \
    rm -rf /var/lib/apt/lists/* && \
        rm -rf /usr/share/doc/* && \
        rm -rf /usr/share/icons/* && \
        rm -rf /usr/share/man/*

# Set the working directory to /app
WORKDIR /kros3

# We add package.json first so that the  docker image build
# can use the cache as long as contents of package.json
# hasn't changed.
COPY package.json /kros3
RUN npm install && \
        rm -rf /root/.npm/_cacache && \
        rm -rf /var/cache/*


# Copy the NGINX configuration
ADD nginx_config /etc/nginx/sites-enabled/default

# Copy the current directory contents into the container at /kros3
ADD . /kros3

# Set the working directory to /kros3, and build the frontend package
WORKDIR /kros3

# Build the frontend static files and delete all the kros3 code, nodejs and python to trim down the image size
RUN npm run-script build && \
        mkdir /build && \
        mv build/* /build && \
        rm -rf /kros3 && \
        apt-get purge nodejs python3 -y && \
        rm -rf /root/.npm && \
        rm -rf /var/lib/dpkg/* && \
        rm -rf /usr/include/*

RUN mkdir -p /var/log/supervisord
COPY supervisord.conf /etc/supervisor/supervisord.conf

# Setup and configure systemd
ENTRYPOINT ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf", "-n"]
EXPOSE 80



