function setup(){
  createCanvas(400,400);
  
  for (let x=0;x<2;x++){
    console.log(`the first for loop has executed ${x} times`);
    for (let y=0;y<2;y++){
      rect(100 *x, 100*y,100,100);
      text(`x:${x} y:${y}`, 100*x+15, 100*y+15);
      console.log(`the first for loop has executed ${y} times`);
    }
  }
}

function draw(){
  background(220);
  
  for(let x =0; x<20;x++){
    for(let y =0; y<20;y++){
      rect(x*20,y*20,20,20);
}
  }
}
