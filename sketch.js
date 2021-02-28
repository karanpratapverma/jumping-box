
var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
surface1= createSprite(75,590,140,20);
surface1.shapeColor="blue";


surface2= createSprite(525,590,140,20);
surface2.shapeColor="orange";


surface3= createSprite(375,590,140,20);
surface3.shapeColor="yellow";


surface4= createSprite(225,590,140,20);
surface4.shapeColor="green";



    //create box sprite and give velocity

box= createSprite(random(20,750),100,20,20);
box.shapeColor="black"
box.velocityX=3;
  box.velocityY= 5; 



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
   box.bounceOff(edges);


            











    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor= "blue";
        box.velocityX= 0;
        box.velocityY=0;
        music.play();
        }
        
        if(surface2.isTouching(box)&& box.bounceOff(surface2)){
            box.shapeColor= "orange";
            box.velocityX= 0;
            box.velocityY=0;
            music.stop();
            }
            if(surface3.isTouching(box)&& box.bounceOff(surface3)){
                box.shapeColor= "yellow";
                box.velocityX= 0;
                box.velocityY=0;
                music.play();
                }
                
                if(surface4.isTouching(box)&& box.bounceOff(surface4)){
                    box.shapeColor= "green";
                    box.velocityX= 0;
                    box.velocityY=0;
                    music.stop();
                    }
                    
        









drawSprites();

}