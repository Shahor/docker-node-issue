FROM node:10.9.0

WORKDIR /app
ADD package.json /app
ADD index.js /app

CMD node index.js