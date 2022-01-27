const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pi1,pig2,pig3
var bird;
var slingshot;
var backgroundImage,platForm;
var bg="bg.png";
var score=0;
var gameState="onSling";
function preload(){
backgroundImage =loadImage("bg.png");
//getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    pig1 = new Pig(810,350);
    pig2 = new Pig(500,350);
    pig3 = new Pig(810,220);

    ground = new Ground(600,height,1200,20);
    platForm = new Ground(150,305,300,170);
    bird = new Bird(200,50);
    slingshot =new Slingshot(bird.body,{x:200,y:50});

}


function draw(){
    background(backgroundImage);
    textFont("America");
    textSize(35)
    text("Puntuación "+score,width-300,50);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    pig3.display();
    pig3.score();

    ground.display();
    bird.display();

    platForm.display();
    slingshot.display();




}
function mouseDragged(){
if(gameState!="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
   
}
function mouseReleased(){
slingshot.fly();
gameState=launchet
}
function keyPressed(){
if(keyCode==32){
bird.trajectory=[];
Matter.Body.setPosition(bird.body,{x:200,y:50});
slingshot.attach(bird.body );

gameState="onSling"}
}
async function getBackgroundImg(){    
    var response=await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
      var responseJSON=await response.json();
      var datetime=responseJSON.datetime;
      var hour=datetime.slice(11,13);
      if(hour>06&&hour<20){
          bg="bg.png";

    
        }
else{
    bg="bg2.jpg";
}
backgroundImage=loadImage(bg);
}


