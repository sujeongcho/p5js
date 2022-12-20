var t;
let canvas;


function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(255,0,0, 10);
  noFill();
  t = 0;
}

function draw() {
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 1000; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 450 * noise(i * 0.01, t * 0.008);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

  // clear the background every 600 frames using mod (%) operator
  if (frameCount % 2000 == 0) {
	background(255);
  }

}