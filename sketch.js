var boi, boi_running, edges;
var pathImage;
var path
var coin 
var coinImage
var bomb 
var bombImage
var coin2
var coinImage2
var energyDrink
var energyDrinkImage

function preload(){
  //pre-load images
  boi_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png")
  coinImage = loadImage("coin.png")
  bombImage = loadImage("bomb.png")
  coinImage2 = loadImage("coin.png")
  energyDrinkImage = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,100,40,400);
  path.addImage (pathImage);
  path.velocityY = 4;
  edges = createEdgeSprites();

  boi = createSprite(180,340,30,30);

  path.scale = 1.2;
  boi.addAnimation("running", boi_running);
  boi.scale = 0.08

  coin = createSprite(100,200)
  coin.addImage (coinImage2)
  coin.scale = 0.5

  coin2 = createSprite(171,23)
  coin2.addImage (coinImage)
  coin2.scale = 0.5

  bomb = createSprite(320,14)
  bomb.addImage (bombImage)
  bomb.scale = 0.1

  energyDrink = createSprite(250,200)
  energyDrink.addImage (energyDrinkImage)
  energyDrink.scale = 0.1
}

boi.scale = 0.5;
boi.y = 50

function draw() {
  background(0);
  boi.x = World.mouseX

  path.velocityY = 2
  coin.velocityY = 2
  bomb.velocityY = 2
  coin2.velocityY = 2
  energyDrink.velocityY = 2

  if (path.y > 400) { 
    path.y = height/2;
      }
      
      if (coin.y > 400) { 
        coin.y = height/2;
          }
          
          if (bomb.y > 500) { 
            bomb.y = height/2;
              }
                
      if (coin2.y > 500) { 
        coin2.y = height/2;
          }
         
          if (energyDrink.y > 400) { 
            energyDrink.y = height/2;
              }
             
     boi.collide(coin)
     boi.collide(coin2)
     boi.collide(bomb)
     boi.collide(energyDrink)
     boi.collide(edges)
      drawSprites();
    }
