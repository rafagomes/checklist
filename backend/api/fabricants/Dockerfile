FROM node:lts-buster

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN mkdir /home/node/app
RUN chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node

RUN npm install -g yarn
COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 9001

CMD [ "yarn", "start" ]