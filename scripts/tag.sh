#!/bin/bash
CURRENT_VERSION=$(node -p "require('./lerna.json').version")
git tag v${CURRENT_VERSION}
git push --tags

# npx lerna publish from-git