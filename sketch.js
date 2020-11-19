
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint=Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hanger=new Hanger(500,50,300,20);
	bob1=new Bob(460,250,40);
	bob2=new Bob(480,250,40);
	bob3=new Bob(500,250,40);
	bob4=new Bob(520,250,40);
	bob5=new Bob(540,250,40);
	rope1=new Rope(bob1.body,hanger.body,-40*2,0);
	rope2=new Rope(bob2.body,hanger.body,-40*2,0);
	rope3=new Rope(bob3.body,hanger.body,-40*2,0);
	rope4=new Rope(bob4.body,hanger.body,-40*2,0);
	rope5=new Rope(bob5.body,hanger.body,-40*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(185);
  hanger.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.setVelocity(bob1.body,{x:20,y:20})
	}
}



