#!/bin/bash
CURRENT_VERSION=$(node -p "require('./lerna.json').version")
git tag v${CURRENT_VERSION}

npx lerna publish from-git