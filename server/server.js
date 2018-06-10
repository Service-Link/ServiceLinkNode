require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();
const appName = require('./../package').name;
const express = require('express');
const log4js = require('log4js');
const localConfig = require('./config/local.json');
const logConfig = require('./config/log4js.json');
const path = require('path');
const app = express();

log4js.configure(logConfig);
const logger = log4js.getLogger(appName);

require('./routers/index')(app, logger);

const port = process.env.PORT || localConfig.port;
app.listen(port, function(){
  logger.info(`Prometheus listening on http://localhost:${port}/appmetrics-dash`);
  logger.info(`OpenAPI (Swagger) spec is available at http://localhost:${port}/swagger/api`);
  logger.info(`Swagger UI is available at http://localhost:${port}/explorer`);
});

app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

app.use(function (err, req, res, next) {
  res.sendFile(path.join(__dirname, '../public', '500.html'));
})
