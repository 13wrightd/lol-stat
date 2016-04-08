var express = require('express');
var router = express.Router();

var riot = require('../services/riot.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // var data = riot.getChampions().then(function(d) {
  //     res.send(d);
  // });
});

module.exports = router;
