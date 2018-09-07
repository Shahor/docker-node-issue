FROM node:10.9.0

WORKDIR /app
ADD package.json /app
ADD index.js /app

RUN yarn install

CMD node index.js