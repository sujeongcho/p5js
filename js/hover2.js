let rectW = 100;
let rectH = 100;

function setup(){
  createCanvas(400,400);
  rectMode(CENTER);
}

function draw(){
  background(0);
  
  if(mouseX> width/2 - rectW/2 && mouseY > height/2 - rectH/2 && mouseX <width/2 + rectW/2
&& mouseY <height/2 +rectH/2){
    fill(255,255,0);
  }else{
    fill(0);
  }
  
  // rect(width/2, height/2, rectW, rectH);
  textAlign(CENTER);
  textSize(48);
  text('HELLO', width/2, height/2);
}
