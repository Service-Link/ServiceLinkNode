var express = require('express');
module.exports = function (app) {
  const basepath = "/";
  require('./swagger')(app);
  require('./health')(app);
  require('./demo')(app, basepath);
  app.use(express.static('public'));
};