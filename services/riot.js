'use strict';

var https = require('https');
var config = require('../config.js');
var key = config.apiKey.brian;

var riot = {};

riot.getChampions = function(callback) {
    var endpoint = '/api/lol/na/v1.2/champion/';

    getEndpointData(endpoint, function(data) {
        callback(data);
    });
}

riot.getRankedStatsByName = function(summoner, callback) {
    var endpoint = '/api/lol/na/v1.3/stats/by-summoner';

    riot.getSummonerIdByName(summoner, function(id) {
        getEndpointData(endpoint + '/' + id + '/ranked', function(data) {
            callback(data);
        });
    });
}

riot.getSummonerMasteriesByName = function(summoner, callback) {
    var endpoint = '/api/lol/na/v1.4/summoner/by-name/' + summoner;
    var secondEndpoint = '/api/lol/na/v1.4/summoner/';

    getEndpointData(endpoint, function(data) {
        getEndpointData(secondEndpoint + data[summoner.toLowerCase()].id + '/masteries', function(result) {
            callback(result);
        });
    });
}

riot.getSummonerIdByName = function(summoner, callback) {
    var endpoint = '/api/lol/na/v1.4/summoner/by-name/' + summoner;

    getEndpointData(endpoint, function(data) {
        callback(data[summoner.toLowerCase()].id);
    });
}

function getEndpointData(endpoint, callback) {
    var data = '';

    var options = {
        host: 'na.api.pvp.net',
        path:  endpoint + '?api_key=' + key,
        method: 'GET'
    };

    var request = https.request(options, function(response) {
        var data = '';

        response.on('data', function(raw_data) {
            data += raw_data;
        });

        response.on('end', function() {
            callback(JSON.parse(data));
        });
    });
    request.end();
};

module.exports = riot;
