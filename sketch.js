var bg;
var ground, invisibleGround, groundImage;
var steve, steveImage,steveDead;
var zombie, zombieImage;

function preload(){
bg=loadImage("./Assets/bg.jpg")
groundImage = loadImage("./Assets/ground4.png");
steveImage = loadImage("./Assets/steve.gif");
zombieImage = loadAnimation("./Assets/zombie.gif");
}
function setup() 
{
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1350,570); 
  
  ground=createSprite(675,550,2700,25);
  steve=createSprite(400,510,50,50);
  steve.addImage(steveImage);
  steve.scale=0.25

}

function draw() 
{
background(bg);
drawSprites()
}

