FROM node:5.1
MAINTAINER Maurits van Mastrigt <maurits@kukua.cc>

WORKDIR /data
COPY ./ /data/
RUN npm install -g grunt-cli bower
RUN npm install
RUN grunt build

EXPOSE 3000
CMD ["npm", "start"]
