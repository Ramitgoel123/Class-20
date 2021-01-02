//   box1.shapeColor = "red";
  // }
  // else {
  //   movingRect.shapeColor = "green";
  //   box1.shapeColor = "green";
  // }
  bounceOff(movingRect,fixedRect)
  drawSprites();


// function isTouching(obj1,obj2)
// {
//   if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
//     && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
//     && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
//     && obj2.y - obj1.y < obj2.height/var fixedRect, movingRect;
var box1,box2,box3,box4;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=+5;
  //  box1=createSprite(200,200,50,50);
  //  box1.shapeColor = "green";
  //  box2=createSprite(300,200,50,50);
  //  box2.shapeColor = "green";
  //  box3=createSprite(400,200,50,50);
  //  box3.shapeColor = "green";
  //  box4=createSprite(500,200,50,50);
  //  box4.shapeColor = "green";
    
} 

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if(isTouching(movingRect,box1))
  // {
  //   movingRect.shapeColor = "red";2 + obj1.height/2) {
//       return true;
  
// }
// else {
//   return false;
// }
//}
}