FROM node:10-alpine

ARG DEPLOY_ENV
ENV HOME=/home/node/app
RUN mkdir $HOME
WORKDIR $HOME


ENV NPM_CONFIG_LOGLEVEL warn

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package*.json ./
RUN npm install

# copy app files
COPY . .

# set scripts permissions
RUN chmod u+x ./scripts/start.sh

EXPOSE 3030
