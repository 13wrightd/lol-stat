'use strict';

var riot = require('../services/riot.js');

module.exports = function(io) {
    io.on('connection', function(socket){
        console.log('a user connected');

        socket.on('league', function() {
            riot.getChampions().then(function(data) {
                socket.emit('league', data);
            });
        });

        socket.on('disconnect', function() {
            console.log('a user quit');
        });
    });
};
