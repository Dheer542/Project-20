function setup() {
  createCanvas(400,1600);
  var car, wall;
  car= createSprite(50, 200, 50, 50);
 wall= createSprite(1500,200,60,height/2);
 car.shapeColor=color("yellow");
  
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX= speed;

  if( car.isTouching(wall)){
    wall.shapeColor = "brown";
    car.shapeColor = "brown"; 
   }
   else{ 
       wall.shapeColor = "green";
       car.shapeColor = "green";
        }
}
var speed, weight;

function draw() {
  background(255,255,255); 
  drawSprites();
}