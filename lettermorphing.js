let lato;
let fontSize = 200;
let firstLetter = [];
let secondLetter = [];
let x,y;

function preload(){

    lato = loadFont('../fonts/Lato-Bold.ttf')
}

function setup(){
    createCanvas(900,1000);
    textFont(lato);
    textSize(fontSize);

    x = width/2 -80;
    y = height/2 +65;

    firstLetter = lato.textToPoints('W', x, y, fontSize,{
        sampleFactor: 0.1
    });
    secondLetter = lato.textToPoints('M',x,y,fontSize,{
        sampleFactor:0.106
    });
    print(firstLetter.length, secondLetter.length)



}


function draw(){
    background(200);

    beginShape()
    for (let i=0; i<firstLetter.length; i++){
        // vertex(firstLetter[i].x,firstLetter[i].y);
        push()
        translate(firstLetter[i].x,firstLetter[i].y);
        line(-10,-10,10,10);
        pop();

        if(firstLetter[i].x <= secondLetter[i].x){
            firstLetter[i].x++;
        }
        if(firstLetter[i].x >= secondLetter[i].x){
            firstLetter[i].x--;
        }
        if(firstLetter[i].y >= secondLetter[i].y){
            firstLetter[i].y--;
        }
        if(firstLetter[i].y <= secondLetter[i].y){
            firstLetter[i].y++;
        }
        // vertex(secondLetter[i].x,secondLetter[i].y);

    }
    // endShape();


    // text('W', x, y);
};
