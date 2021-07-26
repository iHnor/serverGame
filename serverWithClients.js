
var net = require('net');
var client = new net.Socket();



client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.connect(3122, '10.0.0.150', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.')
});

client.on('close', function() {
    console.log('Connection closed');
});