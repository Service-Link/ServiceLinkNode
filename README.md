# ServiceLinkNode [![Build Status](https://travis-ci.org/Service-Link/ServiceLinkNode.svg?branch=master)](https://travis-ci.org/Service-Link/ServiceLinkNode) [![dependencies Status](https://david-dm.org/Service-Link/ServiceLinkNode/status.svg)](https://david-dm.org/Service-Link/ServiceLinkNode) [![devDependencies Status](https://david-dm.org/Service-Link/ServiceLinkNode/dev-status.svg)](https://david-dm.org/Service-Link/ServiceLinkNode?type=dev) [![Greenkeeper badge](https://badges.greenkeeper.io/Service-Link/ServiceLinkNode.svg)](https://greenkeeper.io/)

Server for deploying the Service-Link-Angular application.

## Run locally as Node.js application

npm run start: Start server normally
npm run debug: Debug server
npm run dev: Runs Nodeman (http://nodemon.io/)

## Deploying

Copy prodution ready (i.e: ng build --prod) files from Service-Link-Angular to the public directory. 

## Travis CI

- Any commit will trigger a Travis build and run the unit tests. Relavant Travis build page for this project can be found at, https://travis-ci.org/Service-Link/ServiceLinkNode

- A tagged release will trigger the Travis build + deployment on GCP. To create a tag on local execute `git tag -a <tag-name> -m <message>` and to push it `tag push origin <tag>`