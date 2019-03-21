'use strict'

let buttonSound;     //let accessed only in {} brackets
let buttons = [];    //var accessed anywhere

function preload() {
	buttonSound = loadSound('../assets/sfx/cameraClick.mp3')
}

function setup() {
	buttonSound = selectAll('button');
	for (let i=0; i<buttons.length; i++) {
		buttons[i].mousePressed(playSound);
	}
}

function draw() {

}

function playSound() {
	
}