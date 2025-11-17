#!/bin/bash

# This script prepares the server for the application deployment

# Update the OS and install required packages
yum update -y
yum install -y curl

# Install nvm (Node Version Manager)
# This provides a reliable way to install and manage Node.js versions
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Source nvm script to make it available in the current shell
# This line is critical for making 'nvm' command available immediately
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Node.js version 16 (to match our build environment)
nvm install 16
