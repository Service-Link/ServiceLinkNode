# ServiceLinkNode [![Build Status](https://travis-ci.org/Service-Link/ServiceLinkNode.svg?branch=master)](https://travis-ci.org/Service-Link/ServiceLinkNode) [![dependencies Status](https://david-dm.org/Service-Link/ServiceLinkNode/status.svg)](https://david-dm.org/Service-Link/ServiceLinkNode) [![devDependencies Status](https://david-dm.org/Service-Link/ServiceLinkNode/dev-status.svg)](https://david-dm.org/Service-Link/ServiceLinkNode?type=dev) [![Greenkeeper badge](https://badges.greenkeeper.io/Service-Link/ServiceLinkNode.svg)](https://greenkeeper.io/)

Server for deploying the Service-Link-Angular application.

## Run locally as Node.js application

npm run start: Start server normally
npm run debug: Debug server
npm run dev: Runs Nodeman (http://nodemon.io/)

## Encryption of Config Files

Normally `server/config/log4js.json`, `server/config/mail-config.json` and `gcloudkey.json` needs to be encrypted. Please refer to the creation of tar file and encryption at https://docs.travis-ci.com/user/encrypting-files/. 

## Deploying

- Any commit will trigger a Travis build and run the unit tests. Relavant Travis build page for this project can be found at, https://travis-ci.org/Service-Link/ServiceLinkNode

- A tagged release will trigger the Travis build + deployment on GCP. To create a tag on local execute `git tag -a <tag-name> -m <message>` and to push it `git push origin <tag-name>`

## Additional Notes

- GCP Stackdriver (https://cloud.google.com/stackdriver/) for debugging is supported in this app. 

- Some outstanding issues and roadmap can be found in the Projects pages (https://github.com/Service-Link/Service-Link-Angular/projects and https://github.com/Service-Link/ServiceLinkNode/projects) 
