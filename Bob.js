class Bob{
    constructor(x,y,radius){
        var garb={
            'restitution':1.0
        }
        this.body=Bodies.circle(x,y,radius,garb);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
    var position =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(position.x, position.y, this.radius);
    }
}