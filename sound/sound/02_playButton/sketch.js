'use strict'

let song;
let playButton; //use id in html to call in java
let volumeSlider;

function preload() {
	song = loadSound('../assests/music/astronomy-self-texture.mp3'); //case sensitive, ../ = folder above
}

function setup() {
	playButton = select('#playButton'); //p5 library
	volumeSlider = select('#volumeSlider'); //# or . like css
	playButton.mousePressed(playSong);
}

function draw() {
	song.setVolume(volumeSlider.value()/10);
	console.log(volumeSlider.value());
}

function mousePressed() {
	//song.play(); //plays once then stops
	song.setVolume(0.3); //0-1 value
	song.loop(); //loop is method/function
}

function playSong() {
	if (song.isPlaying()) {
		song.stop();
		playButton.html('play');
	} else {
		song.loop();
		playButton.html('stop');
	}
	song.play();
}