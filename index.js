const ScratchLogin = require('./ScratchLogin')
const DemoGame = require('./DemoGame.js');

var Game = new DemoGame("elfin8er", ScratchLogin.password, 666405122);
Game.start();