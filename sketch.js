//craeates the global variables.
var speed, weight, thickness, bullet, wall, damage;
var stpic ,spic, sheader, headerPic, ssound;
var object1, object2;

//to load the images and sound files to respective variables.
function preload(){
  soundFormats('mp3', 'ogg');
  ssound = loadSound('Gun+Shot2.mp3');
  spic = loadImage('ShootingPic.jpg');
  headerPic = loadImage('Wall Testing.jpg');
}

function setup() {
  //creates the canvas or background.
  createCanvas(1600,400);
 
  //creates the bullet and the wall and assigns values to their properties and variables.
  bullet = createSprite(120,210,50,20);
  wall = createSprite(1330,200,30,400);
  bullet.velocityX = 10;
  bullet.shapeColor = "white";
  wall.shapeColor = "#505050";
  speed = Math.floor(random(223,321));
  weight = Math.floor(random(30,52));
  thickness = Math.floor(random(22,83));
  wall.width = thickness;
  damage = 0;
 
  //creates the header and shooting images.
  sheader = createSprite(650,60,100,100);
  sheader.addImage(headerPic);

  stpic = createSprite(55,260,100,100);
  stpic.addImage(spic);
}

function draw() {
  //gives background color.
  background("black");     
  
  //draws the sprites.
  drawSprites();

  //calls the collide function.
  collide(bullet,wall);
  
  //displays the damage.
  fill("purple");
  textSize(25);
  text("DAMAGE IS :"+Math.floor(damage),200,300);

  //displays whether the wall is effective or not based on the damage.
  if (damage < 10 && damage > 0){
    fill("green");
    textSize(20);
    text("Wall is effective against Bullets.",200,340);
  }
  else if(damage > 10) {
    fill("red");
    textSize(20);
    text("Wall is not effective against Bullets!!!",200,340);
  }

}

 //calculates the damage and accordingly changes the wall colour.
 function damages() {
   damage = (0.5*weight*speed*speed)/(thickness * thickness * thickness);
   console.log(damage);
 
   if (damage < 10){
      wall.shapeColor = "green";
   }
   else {
      wall.shapeColor = "red";
   }

 }

 //algorithm for the collision of the bullet with the wall.
 function collide(object1,object2) {
  if(object2.x - object1.x === object1.width/2 + object1.width/2 - 10){  
    object1.velocityX = 0;
    ssound.play();
    bullet.x = wall.x - (thickness/2 + bullet.width/2);
    damages();
  }
 }


