FROM balenalib/rpi-raspbian:stretch

RUN apt-get update

RUN apt-get install -y --allow-unauthenticated python3 make g++ udev wget tar

WORKDIR /app

RUN wget https://unofficial-builds.nodejs.org/download/release/v14.21.3/node-v14.21.3-linux-armv6l.tar.gz
RUN tar -xzf node-v14.21.3-linux-armv6l.tar.gz
RUN cp -R node-v14.21.3-linux-armv6l/* /usr/local/
