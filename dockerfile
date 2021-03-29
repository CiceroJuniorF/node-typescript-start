FROM node:15.12.0-alpine3.10

# instala as o yarn
RUN npm install -g yarn

# instala as dependencias
RUN yarn install

WORKDIR /root/src

    