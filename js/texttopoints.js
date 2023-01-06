
    let montserrat;
    let fontSize = 200;
    let hiArray;
    let r = 0;

    function preload(){

        montserrat = loadFont('MONTSERRAT-VARIABLEFONT_WGHT.TTF')
    }

    function setup(){
        createCanvas(900,1000);
        textFont(montserrat);
        textSize(fontSize);

        hiArray = montserrat.textToPoints("hi", width/2,height/2, fontSize,{
            sampleFactor: 0.1
        });


    }
    function draw(){
        background(200);
        // text("hi", width/2, height/2);
        beginShape();
        for(let i=0; i<hiArray.length;i++){
             vertex(hiArray[i].x,hiArray[i].y);

            // ellipse(hiArray[i].x, hiArray[i].y,10,10);
            
            // push()
            // translate(hiArray[i].x, hiArray[i].y);
            // rotate(r);
            // r++;
            // strokeWeight(3); 
            // line(-10,-10,10,10);
            // pop();

        }
        endShape(CLOSE);
    }
