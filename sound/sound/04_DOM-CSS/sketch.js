'use strict'
//sounds
let bearSound;
let camelSound;
let otterSound;

//buttons
let bearButton;
let camelButton;
let otterButton;
let stopButton;

function preload() {
  bearSound = loadSound('../assets/animals/blackBear.mp3');
  camelSound = loadSound('../assets/animals/camel.mp3');
  otterSound = loadSound('../assets/animals/otterChirp.mp3');
}

function setup() {
	bearButton = select('#bear');
	camelButton = select('#camel');
	otterButton = select('#otter');

	bearButton.mousePressed(playBearSound);
	camelButton.mousePressed(playCamelSound);
	otterButton.mousePressed(playOtterSound);

	stopButton = createButton('STOP');
	stopButton.parent('#buttonDiv');
	stopButton.style('background-color', '#ff2222');

	stopButton.mousePressed(stopPlease);
}

function draw() {
}

function playBearSound() {
	bearSound.play();
}

function playCamelSound() {
	camelSound.play();
}

function playOtterSound() {
	otterSound.play();
}

function stopPlease() {
	bearSound.stop();
	camelSound.stop();
	otterSound.stop();
}