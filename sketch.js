var movingBlock, fixedBlock;

function setup() {
  createCanvas(800,400);

  movingBlock = createSprite(400, 200, 50, 50);
  fixedBlock = createSprite(700, 200, 50, 50);

}

function draw() {
  background(255,255,255); 

  movingBlock.x = mouseX;
  movingBlock.y = mouseY;

  if(fixedBlock.x - movingBlock.x <= movingBlock.width/2 + fixedBlock.width/2 &&
     movingBlock.x - fixedBlock.x <= movingBlock.width/2 + fixedBlock.width/2 &&
     fixedBlock.y - movingBlock.y <= movingBlock.height/2 + fixedBlock.height/2 &&
     movingBlock.y - fixedBlock.y <= movingBlock.height/2 + fixedBlock.height/2){
    fixedBlock.shapeColor = "red";
    movingBlock.shapeColor = "red";
  }else{
    fixedBlock.shapeColor = "black";
    movingBlock.shapeColor = "black";
  }
  
  
  drawSprites();
}