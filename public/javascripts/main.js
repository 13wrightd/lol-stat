var socket = io();
socket.on('message', function(data){
	console.log('got a message');
})

function getLeagueInfo() {
	console.log('Button clicked!');
	socket.emit('league');
};

socket.on('league', function(data) {
	console.log(data);
	document.getElementById('league-info').innerHTML = data.champions[0].id;
});
