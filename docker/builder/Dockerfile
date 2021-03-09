FROM node:alpine

RUN apk add git

RUN git clone https://github.com/PauloBarbeiro/hq-web-dem.git

WORKDIR /hq-web-dem
RUN git pull
RUN mkdir dist

CMD ["yarn", "build:prod"]