#!/bin/bash

git checkout master
git pull --rebase
#npx lerna version --conventional-commits
npm version patch
CURRENT_VERSION=$(cat package.json | jq .version -r)
git checkout -b release/v${CURRENT_VERSION}