const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper1,ground1,dustbin1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(200,450,40);
	ground1=new Ground(width/2,670,width,20);
	dustbin1=new Dustbin(1200,650);

	Engine.run(engine);
}

function draw(){
background(0);
Engine.update(engine);

paper1.display();
ground1.display();
dustbin1.display();

drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


