var agent3,agent4;
var captain,captainImg;
var spiderMan,spiderAnimation;
var bladeImg,bulletImg;
var bladeGroup,bulletGroup;
var thanos;
var ground;
var distance = 0;
var bg;

function preload()
{
  bg=loadImage("bg1.jpg");
  captainImg=loadImage("Captain3.png");
  spiderAnimation=loadAnimation("c2.png","c2.2.png","c2.3.png","c2.4.png","c2.5.png","c2.6.png");
  bladeImg = loadImage("blade.png");
  bulletImg = loadImage("bullet.png");
}

function setup() 
{
  createCanvas(1100,500);
  captain = createSprite(50,450,50,20);
  captain.addImage(captainImg);

  thanos = createSprite(450,450,20,50);

  bladeGroup = new Group();
  bulletGroup = new Group();

}

function draw() 
{
  background(bg);
  
  camera.position.x=captain.x;
  camera.position.y=captain.y;

  captain.velocityX=0;
  captain.velocityY=0;

 if(keyDown(UP_ARROW))
 {
  captain.velocityY=-3;
 }

 if(keyDown(DOWN_ARROW))
 {
   captain.velocityY=3;
 }

 if(keyDown(RIGHT_ARROW))
 {
   captain.velocityX=3;
   distance++;
 }

 if(keyDown(LEFT_ARROW))
 {
   captain.velocityX=-3;
 }
 
  if(distance === 200)
  {
    spiderMan = createSprite(captain.x,captain.y,20,100);
    spiderMan.addAnimation("animation",spiderAnimation);
  }

  spawnBlades();
  spawnBullets();

  if(bladeGroup.isTouching(captain) || bulletGroup.isTouching(captain))
  {
    captain.destroy();
  }

  
  /*if(bladeGroup.isTouching(spiderMan))
  {
    spiderMan.destroy();
  }

  if(bulletGroup.isTouching(spiderMan))
  {
    spiderMan.destroy();
  }*/

  drawSprites();

  textSize(20);
  fill("white");
  text("Distance : "+ distance,550,50);
}

function spawnBlades()
{
  if(frameCount % 100 === 0)
  {
    var blade = createSprite(random(50,400),0,30,30);
    blade.addImage(bladeImg);
    blade.scale=0.3;
    blade.velocityY=7;
    blade.lifetime=200;
    bladeGroup.add(blade);
  }
}

function spawnBullets()
{
  if(frameCount % 150 === 0)
  {
    var bullet = createSprite(600,random(0,500),10,30);
    bullet.addImage(bulletImg);
    bullet.scale=0.3;
    bullet.velocityX=-7;
    bullet.lifetime=200;
    bulletGroup.add(bullet);  
  }
}