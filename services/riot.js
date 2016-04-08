'use strict';

var https = require('https');

var key = '3ceacb4c-443e-4f3b-ad9f-68c883a52a7f';
var riot = {};

riot.getChampions = function() {
    var options = {
        host: 'na.api.pvp.net',
        path: '/api/lol/na/v1.2/champion?api_key=' + key,
        method: 'GET'
    };

    var request = https.request(options, function(response) {
        response.on('data', function(raw_data) {
            var data = raw_data.toString();
            console.log(data);
            return data;
        });
    });
    request.end();
};

module.exports = riot;
