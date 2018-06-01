var express = require('express');
module.exports = function (app, logger) {
  const basepath = "/";
  require('./swagger')(app);
  require('./health')(app);
  require('./demo')(app, basepath, logger);
  app.use(express.static('public'));
};