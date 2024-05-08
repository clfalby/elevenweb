//The setup function only happens once
var chair=0;
var bingo=300;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(173,216,230);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  strokeWeight(2);
  stroke(255,130,127); // an RGB color for the circle's border
  fill(random(100,255),random(30,255),127,mouseX); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),100,20); // center of canvas, 20px dia
  fill(231,197,mouseX);
  strokeWeight(5);
  rect(bingo,mouseY,50,chair);
  bingo=bingo-1;
  line(100,100,chair,300);
  fill(160,242,133);
  strokeWeight(0);
  textSize(100);
  textFont('Helvetica');
  textStyle(ITALIC);
  text('Hello',200,250);
  

}

function mousePressed(){

  if (chair>=255)
   {chair=0;

   } else {
  chair=chair+5;
   }

  
}
