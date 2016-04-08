'use strict';

module.exports = function(io) {
    io.on('connection', function() {
        console.log('Socket.io connected.');
    });
};
