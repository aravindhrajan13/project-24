
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var dustbinObj,papreObject,groundObject;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbine(1200,650);
	papreObject=new papre(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create the Bodies Here.
    var render =Render. create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:flase
	
	}

	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 dustbinObj.display();
 papreObject.display();
 groundObject.display();

 drawSprite();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(papreObject.body,papreObject.body.position,{x:85,y:-85});
	}
}

