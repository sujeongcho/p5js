let btn;

function setup(){
    createCanvas(400,400);
    btn = createButton("CLICK!");
    btn.mouseClicked(moveButton);
    btn.size(200,100);
    btn.position(10,10);
    btn.style("font-family", "ENGINE");
    btn.style("font-size","48px");
    btn.style("background","black");
    btn.style("color", "white");
}


function draw(){
    background(255);
}

function moveButton(){
    btn.position(random(width), random(height));
    console.log("you cliked!");
}
