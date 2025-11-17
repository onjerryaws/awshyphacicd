#!/bin/bash

# Source nvm so we can use pm2
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to the application source directory
cd /home/ec2-user/nodejs-aws-codedeploy-pipeline

# Start the application with pm2
# This command will start a new process named "my-app" if it doesn't exist,
# or restart it if it already does. This works for the first and all subsequent deployments.
pm2 start app.js --name "my-app" --update-env || pm2 restart "my-app"
