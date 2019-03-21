'use strict'

// speech library documentation: http://ability.nyu.edu/p5.js-speech/
// example source code: https://github.com/IDMNYU/p5.js-speech/blob/master/examples/01simple.html

let talkButton;
let voice = new p5.Speech(); //new P5.Speech object
let wordInput;

function setup() {
	talkButton = select('#talk');
	wordInput=select('#speechInput');

	talkButton.mousePressed(speak);

	voice.listVoices();
	voice.setVoice('Karen');
	voice.setPitch('.1'); //0-1
	voice.setRate('1.9'); //1-10
}

function draw() {

}

function speak() {
voice.speak(wordInput.value());
}