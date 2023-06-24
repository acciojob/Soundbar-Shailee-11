//your JS code here. If required.

 const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const soundsDir = 'sounds/';

let currentSound = null; // keep track of the currently playing sound

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // stop the current sound, if there is one
	  console.log("play");
  })};
 stopButton.addEventListener('click', () => {
    // stop the current sound, if there is one
	  console.log("stop");
  })
