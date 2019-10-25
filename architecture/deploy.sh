#!/bin/bash
#!/usr/bin/fish

# usar un fichero .env para cada servicio
# la carpeta env no debe estar en el repositorio y es propio de cada entorno
# las variables definidas en el fichero xxx.env se usan en el docker-compose para asignar los variables dependientes del entorno
# globals.env define las variables de entornos compartidas por los servicios. se debe usar el enviroment del compose para asignar las variables

# $1 entorno [development, ...]
environment=$1
# $2... $n servicios a levantar en compose

# set services
array=( "$@" )
services=()
arraylength=${#array[@]}

dirapp=../front/src/assets/data/;
dirappfile=appConfig.json;

if [ arraylength != 0 ]; then
  for (( i=2; i<${arraylength}+1; i++ ));
    do
      services[i-2]=${array[$i-1]}
    done
fi


create_app_config () {
    
    if [[ " ${services[@]} " =~ "front" ]] || [[ $arraylength == 1 ]] && [[ $array == $environment ]]; then
        echo "appConfig.json... "
        if [ -f $dirapp$dirappfile ] ; then
            echo "appConfig.json alrady exist... "
            rm $dirapp$dirappfile;
            echo "appConfig.json remove. "
        elif [ ! -e $dirapp ]; then
            echo "data folder for appConfig.json doesn't exist... "
            mkdir -p $dirapp;
            echo "folder create. "
        fi

        echo "creating appConfig.json... "

        envsubst < ./templates/front/appConfig.template > $dirapp$dirappfile;

        echo "appConfig.json create. "

        printf "\n\n"
        
    fi
}

echo "*******************************"
echo "Deploy <<" $environment ">> environment"
echo "*******************************"

# set deployment variable
if [ -f ./deploy.env ]; then
    rm ./deploy.env;
fi
echo "DEPLOY_ENV=$environment" >> ./deploy.env;

echo "exporting globals vars:"
tail  -n +1 -- ../env/globals.env
tail  -n +1 -- ./deploy.env
set -a # export all variables created next
source ../env/globals.env;
source ./deploy.env;
set +a # stop exporting

printf "\n\n"

create_app_config

echo "start docker-compose:"
if [ "$environment" == "development" ]; then
    docker-compose -f docker-compose.yml -p aquiles up ${services[@]};
else
    echo "Error - environment not defined. You have to add deployment parameter [development | ...]";
fi