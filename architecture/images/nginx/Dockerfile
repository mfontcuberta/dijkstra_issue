FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY reverse-proxy/nginx.conf /etc/nginx/nginx.conf