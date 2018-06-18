# ServiceLinkNode [![Build Status](https://travis-ci.org/Service-Link/ServiceLinkNode.svg?branch=master)](https://travis-ci.org/Service-Link/ServiceLinkNode) [![Known Vulnerabilities](https://snyk.io/test/github/SudharakaP/ServiceLinkNode/badge.svg)](https://snyk.io/test/github/SudharakaP/ServiceLinkNode) [![Greenkeeper badge](https://badges.greenkeeper.io/Service-Link/ServiceLinkNode.svg)](https://greenkeeper.io/)

Server for deploying the Service-Link-Angular application.

## Run locally as Node.js application

npm run start: Start server normally
npm run debug: Debug server
npm run dev: Runs Nodeman (http://nodemon.io/)

## Deploying

Copy prodution ready (i.e: ng build --prod) files from Service-Link-Angular to the public directory. 

## Travis CI

- Any commit will trigger a Travis build and run the unit tests. Relavant Travis build page for this project can be found at, https://travis-ci.org/Service-Link/ServiceLinkNode

- A tagged release will trigger the Travis build + deployment on GCP