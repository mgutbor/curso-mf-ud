FROM node:16.17.0-alpine

RUN mkdir app

WORKDIR /app

COPY ["package*.json","/app"]

RUN yarn install

COPY ["*","/app"]

RUN yarn build

RUN npm i -g http-server

EXPOSE 8082
CMD [ "http-server", "dist", "-p", "8082" ]

