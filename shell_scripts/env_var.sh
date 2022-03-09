###  Scripts set environment variables for other shell scripts

#!/bin/bash
secrets=/config/secrets.yaml

api_domain=$(grep 'api_domain' $secrets | awk '{print $2}')
api_hash=$(grep 'api_hash' $secrets | awk '{print $2}')
api_password=$(grep 'api_password' $secrets | awk '{print $2}')
api_username=$(grep 'api_username' $secrets | awk '{print $2}')
docker_api_port=$(grep 'docker_api_port' $secrets | awk '{print $2}')
docker_ip=$(grep 'docker_ip' $secrets | awk '{print $2}')
gh_bedroom=$(grep 'gh_bedroom' $secrets | awk '{print $2}')
gh_bedroompair=$(grep 'gh_bedroompair' $secrets | awk '{print $2}')
HA_Token=$(grep 'lms_ha_token' $secrets | awk '{print $2}')
lms_cli_port=$(grep 'lms_cli_port' $secrets | awk '{print $2}')
lms_ip=$(grep 'lms_ip' $secrets | awk '{print $2}')
lms_password=$(grep 'lms_password' $secrets | awk '{print $2}')
lms_username=$(grep 'lms_username' $secrets | awk '{print $2}')
my_domain=$(grep 'domain' $secrets | awk '{print $2}')
spot_client_id=$(grep 'spot_client_id' $secrets | awk '{print $2}')
spot_client_secret=$(grep 'spot_client_secret' $secrets | awk '{print $2}')
