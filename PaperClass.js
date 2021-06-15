class PaperClass 
{
  constructor(x,y,r)
  {  
     var options = {
        
      isStatic:false,
      'restitution' :0.3,
      'friction' :0,
      'density' :1.3
    }
    this.r = r;
    this.body = Bodies.circle(x,y,r/2,options);
    this.image=loadImage("papercrumbling.png");
    World.add(world, this.body);
  }

  display(){
    
  var paperpos=this.body.position;		
	push()
	translate(paperpos.x, paperpos.y);
  imageMode(CENTER);
  image(this.image,0,0,this.r,this.r);
	pop()
  }
}