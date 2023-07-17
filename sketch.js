var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  obstacle = loadImage("obstacle1.png")
  groundImage = loadImage("ground2.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

cactus = createSprite(100,160,20,50);
cactus.addImage("cactus",obstacle);
cactus.scale = 0.05; 

var num = Math.round(random(1,100));
console.log(num);
}

function draw() {
background(220);
console.log(trex.y);
//jump when the space button is pressed
if (keyDown("space")) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(ground);
drawSprites();
spawnClouds();
}

function spawnClouds(){
var cloud = createSprite(50,50,40,10);
cloud.velocityX=-3;

}