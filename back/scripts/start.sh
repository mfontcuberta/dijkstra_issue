#!/bin/bash
#!/bin/sh

start_deploy=$DEPLOY_ENV

# debug mode
if [ "$DEBUG_PROCESS" == "TRUE" ] ; then
    start_deploy='debug';
# check test
elif [ "$TEST" == "TRUE" ]; then
    POST_FIX=':test';
fi

echo "start <<" $DEPLOY_ENV ">> debug mode:" $DEBUG_PROCESS;
npm run 'start:'"$start_deploy""$POST_FIX";
