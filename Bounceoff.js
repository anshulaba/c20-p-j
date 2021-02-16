var fixedRect,movingRect;

function setup()
{
  createCanvas(600,600);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect=createSprite(200,500,50,50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;

  movingRect.velocityY=-2;
  fixedRect.velocityY=2;

}   

function draw()
{
  background("gold");

 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
   fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

  drawSprites();

}