const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snows = [];
var engine,world
var snowflake = 100;

var backgroundImg;

function preload(){
 backgroundImg = loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world();
  for(var  i = 0; i < snowflake; i++){
      snow.push(new Snow(random(0,800),random(0.400)))
  }
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  for(var i = 0; i < snowflake; i++){
      snow[i].display();
      snow[i].update();

  }
  drawSprites();
}