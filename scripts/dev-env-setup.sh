#!/bin/sh

function install_if_needed {
    `which -s $1`
    local status=$?
    if (( status != 0 )); then
      $2
    fi
}

function install_node {
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | $SHELL
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
    nvm install
}

function install_lerna {
    yarn global add lerna
}

# If node is not installed, download and initialize nvm
install_if_needed "node" install_node
# enable auto-install of pinned yarn version
corepack enable
install_if_needed "lerna" install_lerna
