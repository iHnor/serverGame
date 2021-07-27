#!/usr/bin/env node

const net = require('net');

let map = new Map();
const clients = [];
const server = net.createServer(function (socket) {

	socket.setEncoding('utf-8')
	socket.write(`Welcome!\r\n1 - Stone\n2 - Scissors\n3 - Paper\n`);
	const port = socket.remotePort;
	clients.push(socket)

	// console.log('Client IP. Port: ', socket.remoteAddress);
	// console.log('Client connected. Port: ', port);

	socket.on('close', () => {
		let index = clients.indexOf(socket);
		clients.splice(index, 1);
		console.log('Closed ', port)
	})

	socket.on('data', (message) => {
		text = Number(message);

		if (isNaN(text)) {
			socket.write('It`s not a number. Enter the number!\n');
		}
		else {
			if (text >= 1 && text <= 3) {
				let index = clients.indexOf(socket);
				map.set(index, text);
			}
			else
				socket.write('Enter number between 1 - 3\n');
		}
	})

	socket.on('data', () => {
		if (map.size == clients.length) {
			let rezult = whoWin(map);
			if (rezult == 1) {
				map.clear();
				clients.forEach(client => {
					client.write('---------\nNew Round\n');
				})
			}
		}

	})

	socket.pipe(process.stdout)


});

server.listen(3548, '10.0.0.150');
server.on('listening', () => { console.log('Listening on ', server.address()); })

export {whoWin as funcWhoWin}