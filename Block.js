class Block{

    constructor(x,y){

        var options={

            'restitution':0.8,
            'density':0.3,
            'friction':1

        }

        this.width = 100;
        this.height = 100;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightblue");
        strokeWeight(8);
        stroke("yellow");
        rect(0,0,this.width,this.height);
        pop();

    }

}