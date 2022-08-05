class Car {
    constructor(x,y,r,image)
      {
          var options = { 
              density:1, 
              frictionAir: 1,

          };
          look();
          this.x=x;
          this.y=y;
          this.r=r;
          this.image = a
          function look(){
            rannum = Math.round(random(1,6));
            if(rannum === 1){
            a = loadImage(am);
          }
          if(rannum === 2){
              a = loadImage(acura);
            }
            if(rannum === 3){
              a = loadImage(ford);
            }
          if(rannum === 4){
              a = loadImage(audi);
            }  
            if(rannum === 5){
              a = loadImage(ferrari);
            }
            if(rannum === 6){
              a = loadImage(lambo);
            }   
            }    
        
          
          
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var heroPos=this.body.position;		
              push()
              translate(heroPos.x, heroPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r+50, this.r+10)
              pop()
              
      }
      
      
  }
    
    