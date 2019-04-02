#!/bin/bash

# Create Multiprotokoll IoT Edge Gateway, swellnitz 20190206

# eth0 connection to Soft-SPS
# eth1 connection to Router (Internet)

...

# installing node.js, npm and Node-RED
apt-get install curl software-properties-common
curl -sL https://deb.nodesource.com/setup_11.x | bash -
apt-get install -y nodejs gcc g++ make tmux
npm install -g --unsafe-perm node-red

# Make cronjob entry, to start Node-RED after reboot
echo  -e  "$(crontab -l)\n@reboot sleep 100 && node-red" | crontab -

reboot

