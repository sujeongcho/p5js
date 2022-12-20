var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 20);
  noFill();
  t = 0;
}

function draw() {
  var x1 = width * noise(t + 35);
  var x2 = width * noise(t + 105);
  var x3 = width * noise(t + 405);
  var x4 = width * noise(t + 905);

  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 95);
  var y3 = height * noise(t + 905);
  var y4 = height * noise(t + 1235);


  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;

  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 2000 == 0) {
	background(255);
  }
}