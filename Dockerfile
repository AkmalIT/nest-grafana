FROM node:18.19.1

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . . 

EXPOSE 3001

CMD [ "yarn", "start:dev" ]