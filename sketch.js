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
  lovesprite.scale=0.5;
  lovesprite.visible = false;
        amarsprite.velocityX=3;
      vedasprite.velocityX=-3;
}
function preload(){
//amar
  amarImage = loadImage("amar.png");
  
  vedaImage = loadImage("veda.png");
 loveImage = loadImage("loved.png");
  
}

function draw() {
  background("white");
   
  
   //clicksprite = createSprite(300,240,75,40);
   //text("Click on the above box",240,280);
   
  

    
  if(amarsprite.isTouching(vedasprite)) {
      amarsprite.velocityX=0;
      vedasprite.velocityX=0;
    lovesprite.visible = true;
    }
   
  
  drawSprites();
}
