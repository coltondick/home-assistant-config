#!/bin/bash
source /config/shell_scripts/env_var.sh
###  removing any trailing \r if they exist
lms_ip=$(echo $lms_ip | sed -e 's/\r//g')
lms_cli_port=$(echo $lms_cli_port | sed -e 's/\r//g')
jsonrpc="http://$lms_ip:$lms_cli_port/jsonrpc.js"
gh_bedroompair=$(echo $gh_bedroompair | sed -e 's/\r//g')
gh_bedroom=$(echo $gh_bedroom | sed -e 's/\r//g')
option=$1

if [[ $option -eq 1 ]]
then
    curl -X GET -H "Content-Type: application/json" -d '{"id":1,"method":"slim.request","params":["'"$gh_bedroompair"'",["mixer","volume", 100]]}' $jsonrpc
elif [[ $option -eq 2 ]]
then
    curl -X GET -H "Content-Type: application/json" -d '{"id":1,"method":"slim.request","params":["'"$gh_bedroom"'",["mixer","volume", 100]]}' $jsonrpc
else
    echo "Option not recognized"
fi


