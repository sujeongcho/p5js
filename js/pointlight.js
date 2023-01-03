let newFont;
let directionalLightEnable = false;

function preload() {
newFont = loadFont('MONTSERRAT-VARIABLEFONT_WGHT.TTF');
}

function setup() {
createCanvas(600, 300, WEBGL);
textFont(newFont, 16);

redSlider = createSlider(0, 255, 128, 1);
redSlider.position(20, 50);

greenSlider = createSlider(0, 255, 128, 1);
greenSlider.position(20, 80);

blueSlider = createSlider(0, 255, 128, 1);
blueSlider.position(20, 110);
}

function draw() {
background('green');
text("Move the sliders to change the point light's red, "+
						"green and blue values", -285, -125);
noStroke();

redValue = redSlider.value();
greenValue = greenSlider.value();
blueValue = blueSlider.value();

// Create a point light with the selected light color
pointLight(redValue, greenValue, blueValue, 100, 0, 150);

ambientMaterial(255);

// Create the sphere on which the point light will work
sphere(100);
}
