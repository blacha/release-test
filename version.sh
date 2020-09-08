#!/bin/bash

git checkout master
git pull --rebase
npx lerna version --conventional-commits  --no-git-tag-version
CURRENT_VERSION=$(cat package.json | jq .version -r)
git checkout -b release/v${CURRENT_VERSION}