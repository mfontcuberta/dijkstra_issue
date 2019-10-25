#!/bin/bash
#!/bin/sh

# set DINGO_SECURITY_DEBUG_PORT in dingo-globals.env and set in service to DEBUG_PORT in docker-compose


#./wait-for-it.sh db:5432



# set specific actions on environment
#if [ "$NODE_ENV" == "development" ] ; then
#   ...
#fi

start_deploy=$DEPLOY_ENV

# debug mode
if [ "$DEBUG_PROCESS" == "TRUE" ] ; then
#    echo "start debug mode";
#    npm run debug;
    start_deploy='debug';
# check test
elif [ "$TEST" == "TRUE" ]; then
    POST_FIX=':test';
fi

echo "start <<" $DEPLOY_ENV ">> debug mode:" $DEBUG_PROCESS;
npm run 'start:'"$start_deploy""$POST_FIX";


