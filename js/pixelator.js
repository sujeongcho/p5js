let capture;

let sx = 300; //source X
let sy = 300 //source Y
let sw = 100; //source W
let sh = 100 // source H
let dx = 50; //destination X
let dy = 50; //destination Y
let dw = 100; //destination W
let dh = 100; //destination H


function setup(){
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.hide();
}

function draw(){
    background(255);
    for(let i =0; i< width/dw; i++){
        for(let j=0; j <height/dh ;j++){

            dx = dw *i;
            dy = dh *j;
            sx = sw *i;
            sy = sh *j;
            let offset = 120;
            copy(capture, sx, sy, sw, sh, dx, dy, dw, dw-offset,dh-offset);
        }
    }  
}
