FROM balenalib/raspberrypi3-debian-node:14.21.2-buster-build

WORKDIR /app

CMD ["npm", "install", "--production"]
