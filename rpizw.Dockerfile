FROM --platform=linux/arm/v6 balenalib/raspberry-pi-debian-node:14.21.2-buster-build

WORKDIR /app

CMD ["npm", "install", "--production"]
