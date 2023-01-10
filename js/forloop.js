let w = 50;

function setup(){
  createCanvas(400,400);
  console.log('for loop is starting');
  
}

// x++ is the same as x = x+1

console.log('for loop has ended');

function draw(){
  background(220);
  for(let x =0; x<8;x++){
    //equivalent to x = x+2
    ellipse(w*x+25,height/2,w,w);
 ellipse(width/2,w*x+25,w,w);
    console.log(x); //0 //1 ++++
  }
}
