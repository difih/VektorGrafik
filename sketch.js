//punkter
x1 = -10;
y1 = -10;

x2 = 10;
y2 = -10;

x3 = -10;
y3 = 10;

x4 = 10;
y4 = 10;

//skalar
let skalar = 1;

//flyt koordinat x & y
let flytX = 2;
let flytY = 2;

function setup() {
  createCanvas(400, 400);
  background(30);

  //slider
  sliderSkalar = createSlider(0, 40, 1,0.1);
  sliderSkalar.position(450, 10);
  
  sliderFlytX = createSlider(0,40,1,0.1);
  sliderFlytX.position(450,30);

  sliderFlytY = createSlider(0,40,1,0.1);
  sliderFlytY.position(450,50);
}

function draw() {
  background(220);

  skalar = sliderSkalar.value();
  flytX = sliderFlytX.value();
  flytY = sliderFlytY.value();

  point(x1 * skalar + flytX, y1 * skalar + flytY);
  point(x2 * skalar + flytX, y2 * skalar + flytY);
  point(x3 * skalar + flytX, y3 * skalar + flytY);
  point(x4 * skalar + flytX, y4 * skalar + flytY);

  line(x1 * skalar + flytX, y1 * skalar + flytY, x2 * skalar + flytX, y2 * skalar + flytY);
  line(x2 * skalar + flytX, y2 * skalar + flytY, x4 * skalar + flytX, y4 * skalar + flytY);
  line(x3 * skalar + flytX, y3 * skalar + flytY, x4 * skalar + flytX, y4 * skalar + flytY);
  line(x3 * skalar + flytX, y3 * skalar + flytY, x1 * skalar + flytX, y1 * skalar + flytY);
}
