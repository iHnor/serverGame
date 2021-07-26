#!/usr/bin/env node

const net = require('net');

const clients = []
let playars = 0;

const server = net.createServer(function(socket) {
	socket.setEncoding('utf-8')
	if ( playars <= 1){
		playars += 1;

		socket.write('Welcome!\r\n');
		const port = socket.remotePort;
		// console.log('Client IP. Port: ', socket.remoteAddress);
		// console.log('Client connected. Port: ', port);

		socket.on('close', () => {

			let index = clients.indexOf(socket);
			clients.splice(index, 1);
			playars --;
			console.log('Closed ', port)
		})
		clients.push(socket)

		socket.on('data', (message) => {	
			text = message;
			console.log();
			// console.log(text);	
			// clients.forEach(client => {
			// 	if (client !== socket) {
			// 		client.write(message);
			// 	}
			// })
		})

		socket.pipe(process.stdout)
	}
	else {
		socket.write('Sorry room is full\r\n');
		socket.end();
	}
});

server.listen(8888, '10.0.0.150');
server.on('listening', () => { console.log('Listening on ', server.address()); })
