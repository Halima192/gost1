
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pt,bgImg ;
var player
function preload()
{
background1=loadImage("land.png")
land=loadImage("texture_21.png")
bee=loadImage("ghost.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
pt=createSprite(40,600,270,20)
player=createSprite(50,550,20,100)
player.addImage(bee)
pt2=createSprite(550,530,600,20)
pt3=createSprite(350,410,400,20)
pt4=createSprite(250,300,500,20)
pt5=createSprite(72,150,270,20)
pt5=createSprite(580,200,200,20)
	engine = Engine.create();
	world = engine.world;
//player




	//Create the Bodies Here.

	Engine.run(engine);
	bgImg = background1;
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  drawSprites();
 
}



