var fixedrect,movablerect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movablerect=createSprite(400, 300, 80, 80);
  movablerect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movablerect.x=World.mouseX;
  movablerect.y=World.mouseY;

  if(movablerect.x-fixedrect.x<fixedrect.width/2+movablerect.width/2
    && fixedrect.x-movablerect.x<fixedrect.width/2+movablerect.width/2
    && movablerect.y-fixedrect.y<fixedrect.height/2+movablerect.height/2
    && fixedrect.y-movablerect.y<fixedrect.height/2+movablerect.height/2){
    movablerect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movablerect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}