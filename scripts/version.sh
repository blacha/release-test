#!/bin/bash
#
# Version bump the repo and create a pull request
# 
set -e

npx lerna changed -a
npx lerna version --conventional-commits  --no-push

CURRENT_VERSION=$(node -p "require('./lerna.json').version")
git checkout -b release/v${CURRENT_VERSION}
git tag -d v${CURRENT_VERSION}
