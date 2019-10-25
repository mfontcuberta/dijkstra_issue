#!/bin/bash
#!/bin/sh

echo "############## Apply template to <default_template> and create <default.conf> ##############"
envsubst "`env | awk -F = '{printf " $$%s", $$1}'`" < /etc/nginx/conf.d/default_template > /etc/nginx/conf.d/default.conf

echo "############## Run nginx ##################"
nginx -g 'daemon off;'
