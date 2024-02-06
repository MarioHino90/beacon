#!/bin/sh

# Configure Buildkite error handling.
set -eu

node scripts/populate-copy-package.jsons.js
if [ "$(git status -s | grep Dockerfile)" != "" ]; then
  git --no-pager diff Dockerfile
  echo "Invalid configuration, Dockerfile must be updated locally with new packages (this should happen automatically)"
  exit -1
else
  echo "Dockerfile is valid"
fi
