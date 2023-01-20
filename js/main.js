// querySelector is the method (function) that makes the connection between JS and the DOM //

// STEP 1 - Make the connection to the element (s) you want to interact with //

// Home Icon //

console.log('Welcome to Panda SVG');

const vectorGraphic = document.querySelector('#Layer_1')

function logID() {
    console.log('clicked on Home SVG Vector:', this.id);
} 

vectorGraphic.addEventListener('click', logID)

// Call Icon //

function logID() {
    console.log('clicked on Home SVG Vector:', this.id);
} 

vectorGraphic.addEventListener('click', logID)