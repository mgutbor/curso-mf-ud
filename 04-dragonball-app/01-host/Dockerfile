FROM node:16.17.0-alpine

WORKDIR /app

COPY . .

RUN npm i -g http-server yarn

RUN yarn install

RUN yarn build

EXPOSE 8080

CMD [ "http-server", "dist" ]

