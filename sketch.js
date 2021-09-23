var issImg,bg,space_craft1,space_craft2,space_craft3,space_craft4;
var iss;
var spaceCraft;
var hasDocked=false;

function preload(){
  issImg=loadImage("./Docking-undocking/iss.png");
  bg=loadImage("./Docking-undocking/spacebg.jpg");
  space_craft1=loadImage("./Docking-undocking/spacecraft1.png");
  space_craft2=loadImage("./Docking-undocking/spacecraft2.png");
  space_craft3=loadImage("./Docking-undocking/spacecraft3.png");
  space_craft4=loadImage("./Docking-undocking/spacecraft4.png");
  
}

function setup() {
  createCanvas(800,400);
  
  iss=createSprite(400,200,100,100);
  iss.addImage("iss",issImg);
  iss.scale=0.5;
  iss.setCollider("rectangle",-60,-285,30,iss.height);

  spaceCraft=createSprite(380,350,50,50);
  spaceCraft.scale=0.1;
  spaceCraft.addImage(space_craft2);
  
  
  
}

function draw() {
  background(bg);
   
  drawSprites();
  
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+(random(-1,-1));

    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(space_craft3);
    //  spaceCraft.changeAnimation("left");
      spaceCraft.x=spaceCraft.x-1;
    }
  
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(space_craft4);
      //spaceCraft.changeAnimation("right");
      spaceCraft.x=spaceCraft.x+1;
    }
  
    if(keyDown("down_arrow")){
      spaceCraft.addImage(space_craft1);
     // spaceCraft.changeAnimation("neutral");
    }
  
    if(keyDown("up_arrow")){
      spaceCraft.addImage(space_craft2);
      //spaceCraft.changeAnimation("up");
      spaceCraft.y=spaceCraft.y+2;
    }
  }

 

  if(spaceCraft.y<=(iss.y+70) && spaceCraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(20);
    text("Docking Succesful",300,350);
  }


}