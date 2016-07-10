FROM node:6.3.0-slim

ADD package.json /opt/app/package.json
WORKDIR /opt/app
RUN npm install

ADD ./ /opt/app
CMD ["npm", "start"]

EXPOSE 3000