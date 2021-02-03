const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var newGround,bin1,bin2,bin3,paperBall;

function preload()
{
	binImage = loadImage("bin.png");
}

function setup() {
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(1100,495,150,15);
	bin2 = new Bin(1185,420,15,170);
	bin3 = new Bin(1015,420,15,170);
	
	newGround = new Ground(700,550,1400,30);
	
	paperBall = new Paper(200,300);
	
	Engine.run(engine);
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	paperBall.display();
	newGround.display();
	bin1.display();
	bin2.display();
	bin3.display();
	image(binImage,1000,330,200,200);
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:110,y:-110});

		}
	}