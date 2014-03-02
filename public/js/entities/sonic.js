define([	'underscore',
			'when',
			'createjs'],
function(	_,
			when,
			createjs) {

	'use strict';

	var sonicImage = FLAPPYSONIC.loadQueue.getResult('sonic');

	var dataSonic = new createjs.SpriteSheet({
		'images': [sonicImage],
		'frames': {
			'width': 64,
			'height': 64,
			'regX': 0,
			'regY': 0,
			'count': 9
		},
		'animations': {
			'up': [0, 2, 'up'],
			'straight': [3, 5, 'straight'],
			'down': [6, 8, 'down']
		}
	});

	var Sonic = function() {
		this.width = this.getBounds().width;
		this.height = this.getBounds().height;
		this.x = 50;
		this.y = 50;

		this.framerate = 2;

		console.log(this.width);
		console.log(this.x);
	};

	// don't have to override prototype because it's not an actual
	//	createjs construct with a default initialize()

	// var p = Button.prototype = new createjs.Container();
	// Button.prototype.Container_initialize = p.initialize;
	// Button.prototype.initialize = function(label) {
	//     this.Container_initialize();
	//     // add custom setup logic here.
	// }

	// TODO: why can't I proxy the fucking initialize() method here?

	Sonic.prototype = new createjs.Sprite(dataSonic, 'straight');

	Sonic.prototype.glideDown = function(deltaPerSecond) {
		this.y += deltaPerSecond * 5;
	};

	Sonic.prototype.flyUp = function() {
		console.log('fly');
	};
 
	return Sonic;

});