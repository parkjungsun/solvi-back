module.exports = (io) => {
	io.of('/teamChat').on('connection', (socket) => {
		socket.on('teamchat', (data) => {
			console.log(data);
			io.emit('teamchat', data);
		});	
	});
} ;
