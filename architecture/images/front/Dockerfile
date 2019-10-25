# stage 0, build app angular
FROM node:10-alpine as build-stage

ARG DEPLOY_ENV

RUN apk update && \
    apk upgrade && \
    apk add git g++ gcc libgcc libstdc++ linux-headers make python && \
    apk update 

# install libsass
RUN git clone https://github.com/sass/sassc && cd sassc && \
    git clone https://github.com/sass/libsass && \
    SASS_LIBSASS_PATH=/sassc/libsass make && \
    mv bin/sassc /usr/bin/sassc && \
    cd ../ && rm -rf /sassc

# created node-sass binary
ENV SASS_BINARY_PATH=/usr/lib/node_modules/node-sass/build/Release/binding.node
RUN git clone https://github.com/sass/node-sass.git && \
    cd node-sass && \
    git submodule update --init --recursive && \
    npm install && \
    node scripts/build -f && \
    cd ../ && rm -rf node-sass

# add binary path of node-sass to .npmrc
RUN touch $HOME/.npmrc && echo "sass_binary_cache=${SASS_BINARY_PATH}" >> $HOME/.npmrc

ENV SKIP_SASS_BINARY_DOWNLOAD_FOR_CI true
ENV SKIP_NODE_SASS_TESTS true

ENV HOME=/home/node/app
RUN mkdir $HOME
WORKDIR $HOME

ENV NPM_CONFIG_LOGLEVEL warn

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

# copy app files 
COPY . .

RUN chmod u+x ./scripts/start.sh

#EXPOSE 8

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /home/node/app/dist/out/ /usr/share/nginx/html

# Copy nginx conf template, see start_nginx.sh
COPY nginx/default_template /etc/nginx/conf.d/
COPY scripts/start_nginx.sh /etc/nginx/start_nginx.sh

RUN chmod u+x /etc/nginx/start_nginx.sh

