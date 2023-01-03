let newFont;
let directionalLightEnable = false;

function preload() {
newFont = loadFont('MONTSERRAT-VARIABLEFONT_WGHT.TTF');
}

function setup() {
createCanvas(600, 300, WEBGL);
textFont(newFont, 16);

xPosSlider = createSlider(-150,150,100, 1);
xPosSlider.position(20, 50);

yPosSlider = createSlider(-300,300,0, 1);
yPosSlider.position(20, 80);

zPosSlider = createSlider(0, 250, 150, 1);
zPosSlider.position(20, 110);
}

function draw() {
background('blue');
text("Change the sliders to move the point light position "+
						"along x, y and z axis", -285, -125);
noStroke();

xPositionValue = xPosSlider.value();
yPositionValue= yPosSlider.value();
zPositionValue = zPosSlider.value();

// Create a point light at the selected location
pointLight(255,0,0, xPositionValue, yPositionValue, zPositionValue);

//Create  a sphere to show the demostrate of the point light location
	translate(xPositionValue, yPositionValue,zPositionValue);
	sphere(10);
	translate(-xPositionValue, -yPositionValue, -zPositionValue);
	
	specularMaterial(255);
	
// Create the sphere on which the point light will work
sphere(100);
}
