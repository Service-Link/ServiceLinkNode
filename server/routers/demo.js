var express = require('express');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailConfig = require('../config/mail-config.json');

module.exports = function (app, basepath) {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  var router = express.Router();

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

    // setup email data with unicode symbols
    let mainMessageCus = {
      from: '"Service-Link" <' + mailConfig.from + '>', // sender address
      to: req.body.email, // list of receivers
      subject: 'Demo Request: Service-Link', // Subject line
      text: 'Dear ' + req.body.name + ', We are excited to hear your interest in Service-Link and there\'s so much that we would like to share with you. A representative from Service-Link will contact you shortly for more information about the demo. Thank you, Service-Link Team.', // plain text body
      html: 'Dear ' + req.body.name + ', We are excited to hear your interest in Service-Link and there\'s so much that we would like to share with you. A representative from Service-Link will contact you shortly for more information about the demo. Thank you, Service-Link Team.' // html body
    };

    // setup email data with unicode symbols
    let mainMessageSup = {
      from: '"Service-Link" <' + mailConfig.from + '>', // sender address
      to: mailConfig.SLSupport, // list of receivers
      subject: 'Demo Request: Service-Link', // Subject line
      text: 'The following request has been recieved for a demo request via the Service-Link webpage. Name: ' + req.body.name + 'Company: ' + req.body.company + 'Email: ' + req.body.email + 'Country: ' + req.body.country, // plain text body
      html: 'The following request has been recieved for a demo request via the Service-Link webpage.<br>Name: ' + req.body.name + '<br>' + 'Company: ' + req.body.company + '<br>' + 'Email: ' + req.body.email + '<br>' + 'Country: ' + req.body.country // html body
    };

    // Send mail to support
    transporter.sendMail(mailMessageCus, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      res.json({status: info.response});
    });

    // Send mail to customer
    transporter.sendMail(mailMessageSup, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      res.json({status: info.response});
    });
  })

  app.use(basepath, router);
}