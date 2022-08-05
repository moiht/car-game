const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var raod_img,sea_img,am,ford,audi,acura,ferrari,lambo,porsche
var bg,test,ai,a
var t,o,gamestate,rannum
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1280,800);
  gamestate = 1
  
  raod_img = loadImage("images/green road.png");
  bg = createSprite(640,650,800,200);
  bg.addImage(raod_img);
  bg.scale = 2.8;
  am = loadImage("images/astonmartin.png");
  sea_img = loadImage("images/sea.png");
  ford = loadImage("images/ford.png");
  audi = loadImage("images/audi.png");
  acura = loadImage("images/acura.png");
  ferrari = loadImage("images/ferrari.png");
  lambo = loadImage("images/lambo.png");
  porsche = loadImage("images/porsche.png");
  test = new Car(50,650,25);
  ground = new Ground(640, 725, 1280, 20);
  t = 50;
  o = 670;
  ai = createSprite(50,700,25,25);
  ai.addImage(acura);
  ai.scale = 0.1 
}

function draw() {
  ai.velocity.x = 1.5;
  
  background(sea_img);  
  drawSprites();
  Engine.update(engine);
  
  ground.display();
 
  if(test.body.position.x >= 1200 && gamestate === 1) {
   gamestate = 2;
   ai.velocity.x = 0;
   }
  
   if(gamestate === 2){
  textSize(100);
  text("player has won",420,400);
  }
  
  if(ai.position.x >= 1200 && gamestate === 1){
    gamestate = 0;
    ai.velocity.x = 0;
  }
  
  if(gamestate ===0){
    textSize(100);
    text('player has lost',420,400);  
  }
  test.display();
}
function keyPressed(){
 t=t+10
  Matter.Body.setPosition(test.body, { x:t, y:o});
 
}