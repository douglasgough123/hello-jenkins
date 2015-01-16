#!/bin/sh

ssh app@104.236.181.69 <<EOF
  cd ~/hello-jenkins
  git pull
  npm install --production
  forever restartall
  exit
EOF
