// let socket = require('socket.io-client')('ws://arretggj2018.herokuapp.com');
let socketa = require('socket.io-client')('ws://localhost:8000');
setTimeout(function(){
	console.log('sending...');
	socketa.emit('action', {'action': 'makematch', 'type' : 'vr'})

	setTimeout(function(){
		console.log("ready")
		socketa.emit('action', {'action' : 'gameplayLoaded'});

		setTimeout(function(){
			console.log("place drone")
			socketa.emit('action', {'action' : 'placeDrone', 'x' : 5.0, 'y' : 2.0, 'z' : 15.3})

			setTimeout(function(){
				console.log("walk like alien 8)")
				socketa.emit('action', {'action' : 'moveAlien', 'x' : 5.0, 'y' : 2.0, 'z' : 15.3 })

				setTimeout(function(){
					console.log("get the tick")
					socketa.emit('action', {'action':'tick'})

					setTimeout(() => {
						console.log("end the game")
						socketa.emit('action', {'action':'gameOver','winner':'red'})
					}, 1000)

				}, 1000);
			}, 1000)
		}, 3000)

	}, 5000);
}, 500)


socketa.on('action', data => {
	console.log(data)
})