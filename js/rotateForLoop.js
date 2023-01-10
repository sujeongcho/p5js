function setup(){
createCanvas(400,400);
  angleMode(DEGREES);
  noStroke();
}

function draw(){
  background(220,220,0);
  fill(0,200,200)
  
  push();
  translate(width/2,height/2);
  
  for(let i=0; i<12; i++){
    
    rotate(30);
    ellipse(50,50,20,20);
  }
  pop();
}
