var express = require('express');
var router = express.Router();

var riot = require('../services/riot.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    // riot.getChampions(function(data) {
    //     res.send(data);
    // });
    // riot.getSummonerMasteriesByName('xTerminated', function(data) {
    //     res.send(data);
    // });
    riot.getRankedStatsByName('xTerminated', function(data) {
        res.send(data);
    });
});

module.exports = router;
