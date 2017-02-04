var express = require('express');
var router = express.Router();
var appConfig = require('../appConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("tratra",appConfig.databaseURL)
  res.render('index', { title: 'Smooth-CI', databaseURL: appConfig.databaseURL || 'DB URL not defined' });
});

module.exports = router;
