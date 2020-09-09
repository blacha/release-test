#!/bin/bash

git checkout master
git pull --rebase
npx lerna version --conventional-commits  --no-push
CURRENT_VERSION=$(cat lerna.json | jq .version -r)
# git checkout -b release/v${CURRENT_VERSION}
echo $CURRENT_VERSION