class Food{
  constructor(){
    this.image=loadImage("Milk.png");
    this.foodStock=db.ref('Food');
    this.foodStock.on("value",(value)=>{
        foodS=value.val()
    });
  }
  writeStock(x){
    if(x<=0){
      x=0
    }
    if(x>0){
      x=x-1
    }
    db.ref("/").update({
      Food:x
    })
  }
  display(){
      var x=80;
      var y=100;
      imageMode(CENTER);
      //image(this.image,720,220,70,70);
      if(this.foodStock!=0){
          for(var i=0;i<foodS;i++){
              if(i%10===0){
                  x=80;
                  y=y+50
              }
              image(this.image,x,y,50,50)
              x=x+30;
          }
      }
  }
}