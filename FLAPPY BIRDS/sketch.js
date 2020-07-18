const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rocket;
var engine, world;
var bg;
var position;
var obstacle;



function preload(){
  bg = loadImage("./images/background.png");
 
}

function setup() {
  engine = Engine.create();
 world = engine.world;
 var canvas = createCanvas(600,600);
//var bg = createSprite(width/2, height/2, 50, 50);
 //bgImg.addImage("bgImg",bg);

 rocket = new Rocket(displayWidth/2,300);
 Matter.Body.setPosition (rocket.body , {x:300, y :550});
 //obstacle = new Obstacle(displayWidth/4,200);
 
 
}

function draw() {
  background(bg);  
  
  if (rocket !== undefined){
    rocket.move();
    rocket.display();
    }
  

Engine.update(engine);
//obstacle.display();
drawSprites();
}
/*function changePosition(){
  rocket.body.position.x = rocket.body.position.x + x;
  rocket.body.position.y = rocket.body.position.y + y;
}
*/





