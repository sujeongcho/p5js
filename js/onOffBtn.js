let rectW = 100;
let rectH = 100;
let lightSwitch = false;

function setup(){
  createCanvas(400,400);
  rectMode(CENTER);
}

function draw(){
  background(220);
  
  if(!lightSwitch){
    //verifying if lightSwitch is false
    fill(0);
  }else if (lightSwitch){
    //verifying if lightSwitch is true
    fill(255,255,0)}

rect(width/2, height/2, rectW, rectH);
}

function mousePressed(){
   if(mouseX> width/2 - rectW/2 && mouseY > height/2 - rectH/2 && mouseX <width/2 + rectW/2
&& mouseY <height/2 +rectH/2){
  // if (!lightSwitch){
  //   lightSwitch = true;
  // }else{
  //   lightSwitch =false;
     lightSwitch = !lightSwitch;
     
     console.log('the light switch is' + lightSwitch);
  }
 console.log('mouse has been pressed'); 
}
