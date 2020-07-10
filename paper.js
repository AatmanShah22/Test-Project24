class Paper {  
    constructor(x, y, radius){
        var options = {
         'isStatic': false,   
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body = Bodies.circle(250, 540,20,options);
        this.width = 33;
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
        
        this.radius = radius;
        World.add(world, this.body);
       
        
       
   }
   display(){
    fill("red");
    var pos = this.body.position;
    var angle = this.body.angle;
    fill("White");
    rotate(angle);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);

       
        
   }
}
