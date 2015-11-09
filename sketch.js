// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// An array of lines from a text file
var lines;

// The Markov Generator object
var markov;

function preload(){
    lines = loadStrings('passwords.txt');
}

function setup() {

  console.log(lines);

  noCanvas();
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  markov = new MarkovGenerator(4, 200);
  // Feed all the lines from the text file into the generator
  for (var i = 0; i < lines.length; i++) {
    markov.feed(lines[i]);
  }
  // Set up a button
  var button = select('#button');
  button.mousePressed(generate);
}

function generate() {
  // Display the generated text
  var output = select('#newpassword');
  var text = markov.generate();
  output.html(text);
  output.style('color', 'red');
}
