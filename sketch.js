function setup() {
  createCanvas(600, 300);
  
  amarsprite = createSprite(50,150,20,50);
  amarsprite.addImage(amarImage);
  amarsprite.scale=0.1;
  vedasprite = createSprite(550,150,20,50);
   vedasprite.addImage(vedaImage);
  
   love = createSprite(300,50,75,40);
  love.addImage(loveImage);
  love.visible = false;
}
function preload(){

  amarImage = loadImage("amar.png");
  
  vedaImage = loadImage("cloud.png");
 loveImage = loadImage("cloud.png");
  
}

function draw() {
  background("white");
   
  
   clicksprite = createSprite(300,240,75,40);
   text("Click on the above box",240,280);
   
    if(mousePressedOver(clicksprite)) {
      amarsprite.velocityX=3;
      vedasprite.velocityX=-3;
    }
  if(amarsprite.isTouching(vedasprite)) {
      amarsprite.velocityX=0;
      vedasprite.velocityX=0;
    love.visible = true;
    }
   
  
  drawSprites();
}
