
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,box1,box2,box3,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(400,height,1200,20);
	paperBall = new paper(100,200,50);
	box1 = new dustbin(650,680,160,20);
	box2 = new dustbin(555,640,20,100);
	box3 = new dustbin(740,640,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  //display bodies
  drawSprites();
  ground1.display();
  paperBall.display();
  box1.display();
  box2.display();
  box3.display();
  

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:500,y:-500}); 		
	}
}



