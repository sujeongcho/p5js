function setup(){
    createCanvas(windwoWidth, windowHeight);
    background('black');
}

function draw(){
    px = pow(mouseX-pmouseX, 2);
    py = pow(mouseY-pmouseY, 2);
    speed = sqrt(px+py);
    circle(mouseX, mouseY, speed);
}

