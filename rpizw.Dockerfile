FROM balenalib/raspberry-pi-debian:latest

RUN apt-get update

#FROM rustembedded/cross:arm-unknown-linux-gnueabihf

#RUN dpkg --add-architecture armhf
#RUN apt-get update &&\
#    apt-get install -y pkg-config libudev-dev:armhf libsqlite3-dev:armhf python3 make g++ udev wget tar \
#
#WORKDIR /app
#
#RUN wget https://unofficial-builds.nodejs.org/download/release/v14.21.3/node-v14.21.3-linux-armv6l.tar.gz
#RUN tar -xzf node-v14.21.3-linux-armv6l.tar.gz
#RUN cp -R node-v14.21.3-linux-armv6l/* /usr/local/
