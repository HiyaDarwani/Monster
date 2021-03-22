const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundimg;


function preload() {
//preload the images here
backgroundimg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1300, 700);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(width/2,height,width,20);
  superhero = new Hero(100, 200, 400, 250)
  rope = new Fly(superhero.body,{x:250, y:50})
}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
 
  ground.display();
  superhero.display();
  rope.display();
}

