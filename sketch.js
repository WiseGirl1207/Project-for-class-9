var box

function setup() {
  createCanvas(800,800);
  box = createSprite(500,500,50,50)
}

function draw() 
{
  background("black");
  box.shapeColor=("white")
  box.rotate;
  box.rotationSpeed=5;
  if (keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 5;
    background("pink");
    box.shapeColor=("lightblue");
    box.scale=1.5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5;
    background("lightgreen");
    box.shapeColor=("pink");
    box.scale = 1;
  }
  if (keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 5;
    background("lightblue");
    box.shapeColor=("lightyellow");
    box.scale = 0.5;
  }
  if (keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 5;
    background("lightyellow");
    box.shapeColor=("lightgreen");
    box.scale = 0.75;
  }

  drawSprites();
}






