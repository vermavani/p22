var canvas;
var music;
var shape;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1250,600);

    //create 4 different surfaces
    surface = createSprite(1000,540,240,100)
    surface.shapeColor = "red"

    surface1 = createSprite(750,540,240,100)
    surface1.shapeColor = "purple"

    surface2 = createSprite(500,540,240,100)
    surface2.shapeColor = "yellow"

    surface3 = createSprite(240,540,240,100)
    surface3.shapeColor = "green"


    surface4 = createSprite(50,300,80,240)
    surface4.shapeColor ="pink";

    surface5 = createSprite(1200,300,80,240)
    surface5.shapeColor ="lightblue";

    //create box sprite and give velocity
    box = createSprite(200,300,30,30)
    box.shapeColor ="white";
    box.velocityX = -4;
    box.velocityY = 5;
}

function draw() {
    background("black");
    //create edgeSprite

   edges= createEdgeSprites();
   box.bounceOff(edges)

   if(surface2.isTouching(box)){
       box.shapeColor="yellow"
       box.velocityX=0;
       box.velocityY=0;
       music.stop();
   }

    //add condition to check if box touching surface and make it box
    if(surface.isTouching(box) && box.bounceOff(surface)){
       surface.shapeColor = "orange";
       box.shapeColor = "orange";
      music.play()
      }
      if(surface1.isTouching(box) && box.bounceOff(surface1)){
        surface1.shapeColor = "blue";
        box.shapeColor = "blue";
        music.play()
       }
       if(surface3.isTouching(box) && box.bounceOff(surface3)){
        surface3.shapeColor = "lightgreen";
        box.shapeColor = "lightgreen";
        music.play()
       }
       if(surface4.isTouching(box) && box.bounceOff(surface4)){
        surface4.shapeColor = "cyan";
        box.shapeColor = "cyan";
        music.play()
       }
       if(surface5.isTouching(box) && box.bounceOff(surface5)){
        surface5.shapeColor = "pink";
        box.shapeColor = "pink";
        music.play()
       }
      
      
     
    drawSprites();
}
