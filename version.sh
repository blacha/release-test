#!/bin/bash
set -e

git checkout master
git pull --rebase

npx lerna changed -a
npx lerna version --conventional-commits  --no-push

CURRENT_VERSION=$(cat lerna.json | jq .version -r)
git checkout -b release/v${CURRENT_VERSION}
git tag -d v${CURRENT_VERSION}

echo $CURRENT_VERSION