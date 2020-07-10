const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var paper;
var binImg, bin;


function preload(){
  binImg = loadImage("Images/dustbin.png"); 
 }

 function setup() {
  var canvas = createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  

  
  paper = new Paper();

  bin = createSprite(964,520,20,20);
  bin.addImage(binImg);
  bin.scale = 0.5;

  bin1 = new DustBin (902,505,10,120);
  bin2 = new DustBin(962,565,130,10);
  bin3 = new DustBin(970,505,10,120);
  
  var options = {
    isStatic:true
  }
 

 
function draw() {
  background(0);
  rectMode(CENTER);
    bin1.display();
    bin2.display();
    bin3.display();
    paper.display();
   
    drawSprites();
  
  }
  function keyPressed(){
  if(KEYCODE === UP_ARROW) {
    console.log("if");
    Matter.Body.applyForce(paper.body, paper.body.position), {
      x: 70,
      y: -70
    };
  }
}
}
