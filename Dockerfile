FROM node:latest

WORKDIR /app
COPY . /app

RUN chmod 777 -R /app
RUN npm install