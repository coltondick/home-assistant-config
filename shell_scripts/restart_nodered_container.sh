#!/bin/sh
source /config/shell_scripts/env_var.sh
###  removing any trailing \r if they exist
docker_ip=$(echo $docker_ip | sed -e 's/\r//g')
docker_api_port=$(echo $docker_api_port | sed -e 's/\r//g')

container_id="nodered"
docker_api="http://$docker_ip:$docker_api_port/container/$container_id/restart"

restart_container() {
    curl $docker_api
}

restart_container
