FROM arm32v6/alpine:latest

WORKDIR /app
# Add necessary build dependencies
RUN apk update && apk add --no-cache pkgconfig eudev-dev sqlite-dev python3 make g++ udev wget tar


RUN wget https://unofficial-builds.nodejs.org/download/release/v14.21.3/node-v14.21.3-linux-armv6l.tar.gz
RUN tar -xzf node-v14.21.3-linux-armv6l.tar.gz
RUN cp -R node-v14.21.3-linux-armv6l/* /usr/local/
