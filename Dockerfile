FROM node:6.3.0-slim

ADD package.json /usr/src/app/package.json

WORKDIR /usr/src/app
RUN npm install

VOLUME ["/usr/src/app"]
ADD ./ /usr/src/app
CMD ["npm", "start"]

EXPOSE 3000