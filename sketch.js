var dog,happyDog,db,foodS,foodStock,dogImg,happyDogImg;
var feed,addFood,fedTime,lastFed,foodS;
var foodObj;
function preload()
{
  dogImg=loadImage("dogImg.png");
  happyDogImg=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(800, 500);
  db=firebase.database();
  dog=loadImage("dogImg.png");
  foodObj=new Food;
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoodS)
  image(dog,600,250,250,250)
  textSize(30)
  stroke("yellow")
  text("Milk Bottles Left:"+ foodS,100,100);
  foodObj.display();
  fedTime=db.ref('FeedTime');
  fedTime.on("value",function(value){
    lastFed=value.val();
  })
  if(lastFed>=12){
    text("Last Feed : "+lastFed%12+" PM",350,30)
  }else if(lastFed==0){
    text("Last Feed : 12 AM",350,30)
  }else{
    text("Last Feed : "+lastFed%12+" AM",350,30)
  }
}
function feedDog(){
 dog=loadImage("dogImg1.png");
 foodObj.writeStock(foodS);
 db.ref('/').update({
   Food:foodS,
   FeedTime:hour()
 })
}
function addFoodS(){
 foodS++;
 db.ref("/").update({
   Food:foodS
 })
}




