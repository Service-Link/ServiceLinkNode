const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const nodemailer = require('nodemailer');
const mailConfig = require('../config/mail-config.json');
const handlebars = require('handlebars');
var compiledTemplate = '';

module.exports = function (app, basepath, logger) {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({
    extended: true
  })); // for parsing application/x-www-form-urlencoded
  var router = express.Router();

  if (compiledTemplate == '') {
    fs.readFile("server/config/email-template.html", "utf8", function (err, data) {
      if (err)
        logger.fatal(err);
      let template = data.toString();
      compiledTemplate = handlebars.compile(template);
    });
  }

  router.post('/demo', function (req, res, next) {
    let transporter = nodemailer.createTransport({
      host: mailConfig.smtpHost,
      port: mailConfig.smtpPort,
      secure: mailConfig.smtpSSL, // true for 465, false for other ports
      auth: {
        user: mailConfig.smtpUser,
        pass: mailConfig.smtpPassword
      }
    });

    let emailMessage = compiledTemplate({
      "name": req.body.name
    })

    // setup email data with unicode symbols
    let mailMessageCus = {
      from: '"Service-Link" <' + mailConfig.from + '>', // sender address
      to: req.body.email, // list of receivers
      subject: 'Demo Request: Service-Link', // Subject line
      text: 'Dear ' + req.body.name + ', We are excited to hear your interest in Service-Link and there\'s so much that we would like to share with you. A representative from Service-Link will contact you shortly for more information about the demo. Thank you, Service-Link Team.', // plain text body
      html: emailMessage // html body
    };

    let mailMessageSup = {
      from: '"Service-Link" <' + mailConfig.from + '>', // sender address
      to: mailConfig.SLSupport, // list of receivers
      subject: 'Demo Request by ' + req.body.name + ': Service-Link', // Subject line
      text: 'Hi there, The following customer has requested for a demo request via the Service-Link webpage. Name: ' + req.body.name + 'Company: ' + req.body.company + 'Email: ' + req.body.email + 'Country: ' + req.body.country, // plain text body
      html: 'Hi there, <br><br>The following request has been recieved for a demo request via the Service-Link webpage.<br><br>Name: ' + req.body.name + '<br><br>' + 'Company: ' + req.body.company + '<br><br>' + 'Email: ' + req.body.email + '<br><br>' + 'Country: ' + req.body.country // html body
    };

    // Send mail to support
    transporter.sendMail(mailMessageCus, (error, info) => {
      if (error)
        logger.fatal(error);
      else
        logger.info('Message sent: %s, Response: %s', info.messageId, info.response);
    });

    // Send mail to customer
    transporter.sendMail(mailMessageSup, (error, info) => {
      if (error)
        logger.fatal(error);
      else
        logger.info('Message sent: %s, Response: %s', info.messageId, info.response);
    });
    res.sendStatus(200);;
  })

  app.use(basepath, router);
}