class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }

    attach(body){

       

        this.fly.bodyA = body;

    }

   

    

   
    
}