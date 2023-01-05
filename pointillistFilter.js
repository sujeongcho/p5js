let capture;

function setup(){
    createCanvas(windowWidth, windowHeight);

    capture = createCapture(VIDEO);
    capture.hide();

    cg = createGraphics(width, height);
}

function draw(){
    background(220);
    capture.loadPixels();
    let x1 = random(capture.width);
    let y1 = random(capture.height);
    let c = capture.get(x1,y1); //x,y

    cg.noStroke();
    cg.fill(c);
    cg.ellipse(x1,y1,10,10);
    
    image(cg,0,0,width,height);
    // print(c);
    capture.updatePixels();
}


