'use strict';

var https = require('https');
var Promise = require('promise');

var key = 'd085e5de-e971-440e-acca-dde6844736e1';
var riot = {};

riot.getChampions = function(callback) {
    var options = {
        host: 'euw.api.pvp.net',
        path: '/api/lol/euw/v1.2/champion?api_key=' + key,
        method: 'GET'
    };

    var request = https.request(options, function(response) {
        var data = '';

        console.log(response.statusCode);

        response.on('data', function(raw_data) {
            data += raw_data;
        });

        response.on('end', function() {
            console.log(data.toString());
            callback(JSON.parse(data));
        });
    });
    request.end();
};

// riot.getChampions = function() {
//     return new Promise(function(resolve, reject) {
//         var options = {
//             host: 'na.api.pvp.net',
//             path: '/api/lol/na/v1.2/champion?api_key=' + key,
//             method: 'GET'
//         };
//
//         var request = https.request(options, function(response) {
//             var final_data = '';
//             response.on('data', function(chunk) {
//                 final_data += chunk;
//             });
//
//             response.on('end', function() {
//                 resolve(JSON.parse(final_data));
//             });
//         });
//         request.end();
//     });
// };

module.exports = riot;
