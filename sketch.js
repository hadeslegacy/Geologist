
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ruber;
var hamer;
var ground;
var Touching=false ;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	hamer=new hammer(300,300)
	//hamer.create()
	hamer.x= mouseX
	hamer.y= mouseY

	ruber= new rubber(500,500)

	ground=createSprite(400,695,800,10)
	
	
}


function draw() {
  rectMode(CENTER);
  background('white');


	hamer.x= mouseX
	hamer.y= mouseY
  
  if(isTouching(hamer,ground) && Touching===true){
	hamer.velocityX=0
	hamer.velocityY=0
  }
  //console.log(hamer.x)

  drawSprites();
  //isTouching()();
  hamer.display()
  ruber.display()
}

function isTouching(object1,object2)   {
	var object1
	var object2

  if(object1.x - object2.x < (object1.width + object2.width)/2 &&
     object1.y - object2.y < (object1.height + object2.height)/2 &&
    object2.x - object1.x < (object1.width + object2.width)/2 &&
    object2.y - object1.y < (object1.height + object2.height)/2){
    Touching=true
  } else if (object1.x - object2.x > (object1.width + object2.width)/2 ||
			 object1.y - object2.y > (object1.height + object2.height)/2 ||
			 object2.x - object1.x > (object1.width + object2.width)/2 ||
             object2.y - object1.y > (object1.height + object2.height)/2) {
	  Touching=false
  }

}




