#!/bin/bash
npm install
npm run build
npm run build:storybook
npm run test:coverage
coveralls < ./coverage/lcov.info
