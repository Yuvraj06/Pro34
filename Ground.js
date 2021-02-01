class Ground{

    constructor(x,y,w){

        var options={
            
            isStatic:true

        }

        this.width = w;
        this.height = 20;

        this.body = Bodies.rectangle(x,y,w,20,options);
        World.add(world, this.body);

    }

    diplay(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);

    }

}