// Engine - the whole physics engine in which all objets follow rules of physics


//namespacing
const Engine = Matter.Engine;

//World - physical world 
const World = Matter.World;

//Bodies - Objects which exist in the world 
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var ball

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }
  var ball_options = {
    restitution:1
   
  }

  //does not draw a rectangle for you - It creates a rect where? In the computers memory only. 
  ground = Bodies.rectangle(400,390,800,20,object_options);
  World.add(world,ground);

  ball = Bodies.circle(200,100,30,ball_options);
  World.add(world,ball);
  
  console.log(ground);
  console.log(ball);

  console.log(ground.position.x);
  console.log(ground.position.y);
  
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  fill("white");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
}