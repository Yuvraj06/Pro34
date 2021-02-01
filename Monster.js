class Monster{

    constructor(x,y){

        var options={
            'restitution': 0.8,
            'airFriction': 1.0,
            'density': 1.0
        }

        
        this.width = 300;
        this.height = 300;
        this.Visibility=255;
        this.body = Bodies.rectangle(x,y,this.width-50,this.height-50,options);
        World.add(world,this.body);

    }

    display(){

      if(this.body.speed<3){
        
        var pos = this.body.position;

        push()

        translate(pos.x,pos.y);

        imageMode(CENTER);
        image(monster2I,0,0,this.width,this.height);

        pop()
    }
        else{    
        
        World.remove(world,this.body);
        push();
        if(this.Visibility>0){
        this.Visibility = this.Visibility-10}
        tint(255,this.Visibility);        
        image(monster2I,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();        

        }

    }

}