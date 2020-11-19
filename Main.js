class Mainclass{
    constructor(x,y,width,height,angle){
        var one={
            isStatic:true,
            'restitution':1.2,
            'friction':1.0,
            'density':0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,one);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        //image(this.image,0,0,this.heigh,this.width);
        pop();
    }
}