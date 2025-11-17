#!/bin/bash

# Source nvm so we can use npm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to the application source directory
cd /home/ec2-user/nodejs-aws-codedeploy-pipeline

# Install application dependencies
npm install

# Install pm2, a process manager for Node.js, globally
npm install pm2 -g
