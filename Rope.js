class Rope{
   constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offfsetY=offsetY
        var options = {
             bodyA:body1,
             bodyB:body2,
             pointB:{x:this.offsetX,y:this.offfsetY}
        }
          
         this.Rope=Constraint.create(options);
         World.add(world, this.Rope);
     }
      //fly(){
          //this.Chain.bodyA=null;
     // }
     display(){
          var pointA= this.Rope.bodyA.position;
          var pointB=this.Rope.bodyB.position;
          strokeWeight(4);
          var Anchor1x=pointA.x
          var Anchor1Y=pointA.y
          var Anchor2x=pointB.x+this.offsetX
          var Anchor2x=pointB.y+this.offsetY
          line(pointA.x,pointA.y,pointB.x,pointB.y);

       }
};