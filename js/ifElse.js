let brushSize = 50;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
}

function mouseDragged(){
  if(mouseX < width/2){
    brushSize = 25;
    fill(random(255), random(255), random(255));
  }else{
    brushSize = 50;
    fill(random(255));
  } if(mouseY <height/2){
    rect(mouseX,mouseY, brushSize);
  }else{
     ellipse(mouseX, mouseY, brushSize )};
}
