class Hero{

    constructor(x,y){

        var options={
            'restitution': 0.8,
            'airFriction': 1.0,
            'density': 1.0
        }

        // this.image = heroI;
        this.width = 607;
        this.height = 209.33;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;

        push()

        translate(pos.x,pos.y);

        imageMode(CENTER);
        image(heroI,0,0,this.width,this.height);

        pop()

    }

}