var ship , ship_sailing

function preload(){

ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(900,400);
  
   ship = createSprite(50,160,20,150);
   ship.addAnimation("sailing",ship_sailing)

   edges = createEdgeSprites();
   
   ship.scale = 0.3
   ship.y = 40
  }

function draw() {
  background("blue");
 
console.log(ship.x)


}