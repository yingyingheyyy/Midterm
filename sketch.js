//Creative Coding Midterm Project by Yingying He

//Idea inspiration: Art Anxiety by Joan Cornella https://www.instagram.com/p/Cc2Vd-HPQPO/?igshid=YmMyMTA2M2Y=

//Code inspiration: The Coding Train video https://www.youtube.com/watch?v=i2C1hrJMwz0&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=36

let brain;

let levelImage1;
let levelImage2;
let levelImage3;
 
let level1;
let level2;
let level3;
 
let currentLevel;

//preload all images 
function preload(){
  currentLevel = 0;
  brain = loadImage("brain1.jpg")
  levelImage1 = loadImage("pumpkin1.jpg")
  levelImage2 = loadImage("pumpkin2.png")
  levelImage3 = loadImage("pumpkin3.png")
}
 
function setup() {
  createCanvas(400, 400);
  
  // set up buttons of levels of anxiety
  button1 = createButton ("Anxiety Level 1");
  button1.position(270, 150);
  button2 = createButton ("Anxiety Level 2");
  button2.position(270, 200);
  button3 = createButton ("Anxiety Level 3");
  button3.position(270, 250);
 
  // Add mousePressed interaction
  
  //The mousePressed function only takes the name of the displayed function in the condition, so when I tried to  add a parameter to indicate which level I want to display , it failed. I googled it to see if I can make this possible, and got inspiration from the answer on this page.  https://stackoverflow.com/questions/35680778/p5js-button-mousepressed-calls-function-arguments
  
  level1 = new Level(270, 200, 30, levelImage1);
  button1.mousePressed(function() { changeLevel(1);});
  
  level2 = new Level(270, 200, 30, levelImage2);
  button2.mousePressed(function() { changeLevel(2);});
  
  level3 = new Level(270, 200, 30, levelImage3);
  button3.mousePressed(function() { changeLevel(3);});
 
  
}
 
function draw() {
  background(255);
  image(brain,0,50,300,300);
  loadLevel();
}
 
function changeLevel(level){
  currentLevel = level;
}

 //Use the function loadLevel to control which object will show up when the button is clicked.
function loadLevel(){
  if (currentLevel == 1) {
    level1.show();
    level1.move();
  }
  else if (currentLevel == 2) {
    level2.show();
    level2.move();
  }
  else if (currentLevel == 3) {
    level3.show();
    level3.move();
  }
}
 
 //Create a class for different anxiety levels.

class Level{
  constructor(x,y,r,img){
    this.x = x;
    this.y = y;
    this.r = r;
    this.level = img;
  }
  
  move() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }
  
  show() {
    image(this.level, this.x, this.y, 50,50);
 }
  }