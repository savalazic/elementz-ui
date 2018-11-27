#!/bin/bash
set -ev
npm install
npm run lint
npm run test:coverage
npm run build-storybook
coveralls < ./coverage/lcov.info
