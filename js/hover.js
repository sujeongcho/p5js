let w = 200;
let h = 200;

function setup(){
  createCanvas(400,400);
}

function draw(){
  background(220);
  
  if(mouseX <width/2 && mouseY<height/2){
    
    fill(0,255,255);
    rect(0,0,w,h);
    
  }else if(mouseX> width/2 && mouseY<height/2){
    
    fill(255,0,255);
    rect(w,0,w,h);
    
  } else if(mouseX <width/2 && mouseY>height/2){
    fill(255,255,0);
    rect(0,h,w,h);
    
  }else if (mouseX>width/2 && mouseY >height/2){
    fill(0);
    rect(w,h,w,h);
  }
  
  else{
    fill(220);
  }

}
