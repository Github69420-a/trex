
var trex ,trex_running;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  ground = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(200, 150, 100, 100);
  trex.addAnimation("hello", trex_running);
  trex.scale = (0.5);
  ground1 = createSprite(300, 180, 100, 100);
  ground1.addImage("hello", ground);
}

function draw(){
  background("white");
  drawSprites();
  text(mouseX +","+ mouseY, mouseX, mouseY);
  jump();
  trex.collide(ground1);
  if (trex.isTouching(ground1)) {
    trex.velocity = 0
  }
}

function jump() {
  if (keyWentDown("space")) {
    trex.velocityY = -10;
  } 
   trex.velocityY += 0.5;
}