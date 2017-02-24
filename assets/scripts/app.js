new Vue({
	el: '#app',
  	data: {
  		codenames: {
			released: true,
			img: 'codenames.jpg',
			path: 'codenames',
			author: 'Quirin Koch',
			minPlayer: 2,
			maxPlayer: Infinity,
			playTime: '10',
			playerAge: '12 - 99'
		},
		iwdzEisenzeit: {
			released: false
		},
		imhotep: {
			released: false
		},
		pigDice: {
			released: true,
			img: 'pig-dice.jpeg',
			path: 'pig-dice',
			author: 'Quirin Koch',
			minPlayer: 2,
			maxPlayer: 2,
			playTime: '10',
			playerAge: '6 - 99'
		}
  	},
  	methods: {
		drop: function(e) {
            console.log('Looks like you dropped something!');
        }
  	}
});
