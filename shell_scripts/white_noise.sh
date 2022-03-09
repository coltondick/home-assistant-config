#!/bin/sh
### Script that plays rain white noise on Google Home through Logitech
### Media Server using the Chromecast Birdge Plugin and
### Being called by the webhook docker container.

source /config/shell_scripts/env_var.sh
###  removing any trailing \r if they exist
api_domain=$(echo $api_domain | sed -e 's/\r//g')
api_hash=$(echo $api_hash | sed -e 's/\r//g')
api_username=$(echo $api_username | sed -e 's/\r//g')
api_password=$(echo $api_password | sed -e 's/\r//g')

## Constant functions
play() {
  curl -X POST -H "Content-Type: application/json" \
    -d '{"hash": "'$api_hash'", "state": "true"}' \
    https://$api_username:$api_password@$api_domain/white-noise
}

play
