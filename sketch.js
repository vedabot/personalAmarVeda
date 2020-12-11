function setup() {
  createCanvas(600, 300);
  
  amarsprite = createSprite(50,150,20,50);
  amarsprite.addImage(amarImage);
  amarsprite.scale=0.1;
  vedasprite = createSprite(550,150,20,50);
   vedasprite.addImage(vedaImage);
  vedasprite.scale=0.1;
  
   lovesprite = createSprite(300,50,75,40);
  lovesprite.addImage(loveImage);
  lovesprite.scale=1;
  lovesprite.visible = false;
}
function preload(){
//amar
  amarImage = loadImage("amar.png");
  
  vedaImage = loadImage("veda.png");
 loveImage = loadImage("loving.png");
  
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
    lovesprite.visible = true;
    }
   
  
  drawSprites();
}
