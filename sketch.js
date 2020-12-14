
var hr,min,sec;
var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);

}

function draw() {
  background("Red");
  
  translate(200,200);
  rotate(-90);

  //calculating time from p5.js
  hr=hour();
  min=minute();
  sec=second();

  //iterative rotation
  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  //drawing secHand
  push();
  rotate(secAngle);
  stroke("red");
  line(0,0,100,0);
  pop();

  //drawing minHand
  push();
  rotate(minAngle);
  stroke("yellow");
  line(0,0,75,0);
  pop();

  //drawing hrHand
  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,50,0);
  pop();

//drawing secArc
strokeWeight(10);
noFill();
stroke("red");
arc(0,0,300,300,0,secAngle);

//drawing minArc
strokeWeight(10);
noFill();
stroke("yellow");
arc(0,0,150,150,0,minAngle);

//drawing hrArc
strokeWeight(10);
noFill();
stroke("blue");
arc(0,0,100,100,0,hrAngle);



  drawSprites();
}