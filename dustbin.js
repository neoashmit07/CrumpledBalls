class dustbin{
    

    constructor(x,y,width,height){
    var options= {
       isStatic:true,
       'restitution':0.8,
       'friction':0.3,
       'density':1.2
    }
     
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
     //Matter.Bodies.circle(Matter.Bodies.circle(x, y, radius,options))
    }

     display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("purple");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
     }




     
};