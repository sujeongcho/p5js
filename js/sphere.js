let detailY;
let canvas;


function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    detailY = createSlider(1, 24, 3);
    detailY.position(10, height + 8);
    detailY.style('width', '80px');
 
}

function draw() {
    background('black');
    fill(186, 0, 0);
    rotateY(millis() / 700);
    sphere(300, 24, detailY.value());
}
