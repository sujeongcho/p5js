let r = 0;

function setup(){
  createCanvas(400,400);
  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(60);
}

function draw(){
  background(200);
  
  let fc = frameCount;
  let m = millis();
  
  translate(width/2, height/2);
  rotate(r);
  // r = r+ QUARTER_PI * 0.05;
  if (m < 5000){
    r = r+1;
  }else if(m>=5000){
    r = r-1;
  }
  rect(0,0,40,200);
  console.log(fc,m);
}
