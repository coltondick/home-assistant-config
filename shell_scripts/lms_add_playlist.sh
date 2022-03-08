#!/bin/bash
source /config/shell_scripts/env_var.sh
###  removing any trailing \r if they exist
lms_ip=$(echo $lms_ip | sed -e 's/\r//g')
lms_cli_port=$(echo $lms_cli_port | sed -e 's/\r//g')
gh_bedroompair=$(echo $gh_bedroompair | sed -e 's/\r//g')
gh_bedroom=$(echo $gh_bedroom | sed -e 's/\r//g')
option=$1

if [[ $option -eq 1 ]]; then
    curl -X GET 'http://'"$lms_ip"':'"$lms_cli_port"'/anyurl?p0=playlist&p1=play&p2=db%3Aalbum.title%3DNo%2520Album%26libraryTracks.library%3D-1&player='"$gh_bedroompair"'&_dc=1597960487158'
elif [[ $option -eq 2 ]]; then
    curl -X GET 'http://'"$lms_ip"':'"$lms_cli_port"'/anyurl?p0=playlistcontrol&p1=cmd:add&p2=playlist_id:7&player='"$gh_bedroom"'&_dc=1597960487158'
else
    echo "Option not recognized"
fi
