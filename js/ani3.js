var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  t = 0;
}

function draw() {
  // fade the background by giving it a low opacity
 
  background(0,5);
  var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+20);
  var g = 255 * noise(t+20);
  var b = 255 * noise(t+10);
  
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 120, 120);

  t = t + 0.01;
}