var bullet,thickness,wall;
var speed,weight;
var gameState="PLAY";
var restart;




function setup() {
  createCanvas(1300,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 30, 10);
  wall=createSprite(1200,200,thickness,height/2);
  restart=createSprite(150,375,20,20);
}

function draw() {
  background("black");  
  fill("white");
  text("speed: ",50,100);
  text(speed,100,100);
  text("weight: ",50,50);
  text(weight,100,50);
  text("thickness: "+thickness,250,50);
  bullet.shapeColor=color("white");
  restart.shapeColor=color("blue");
  

  if(gameState==="PLAY"){
    bullet.velocityX=speed;
    restart.visible=false; 
    wall.shapeColor=color("white");

    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      
      gameState="END";
      


    }
  }
  
  
  

  drawSprites();
  if(gameState==="END"){
    restart.visible=true;
    var damage= 0.5 * weight * speed * speed/(thickness*thickness*thickness);
      if (damage>10){
        wall.shapeColor=color(255,0,0);
        text("damage:"+damage,250,100);
      }
      
      if (damage<10){
        wall.shapeColor=color(0,255,0);
        text("damage:"+damage,250,100);
      }
    text("Press dis to restart",100,350);
    if(mousePressedOver(restart)){
      reset();
      gameState="PLAY";
    }
  }
}

function reset(){

  bullet.x=50;
  bullet.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  wall.width=thickness;
}
function hasCollided(lbullet, lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true

  }
   return false;



}