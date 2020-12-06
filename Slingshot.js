class Slingshot{
    constructor(bodyX,pointY){
        var options={
            bodyA:bodyX, 
            pointB:pointY,
            stiffness:0.06,
            length:30,
        }
    this.chain=Constraint.create(options)
    this.pointB=pointY
    World.add(world,this.chain)
    }
    birdFly(){
        this.chain.bodyA=null;
    }
display(){
    if(this.chain.bodyA){
    var pointA=this.chain.bodyA.position
    var pointB=this.pointB
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y) 
}
}
}