const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;



var bg, monsterI,monster2I, heroI;  

function preload() {
//preload the images here

bg = loadImage("images/GamingBackground.png");

monsterI = loadImage("images/Monster-01.png")
monster2I = loadImage("images/monster-02.png");

heroI = loadImage("images/Superhero-01.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(1500,790,3000);

  hero = new Hero(400,100);

  fly = new Fly(hero.body,{x:400,y:400});

  block1 = new Block(1000,100);
  block2 = new Block(1000,100);
  block3 = new Block(1000,100);
  block4 = new Block(1000,100);
  block5 = new Block(1000,100);
  block6 = new Block(1000,100);
  block7 = new Block(1000,100);
  block8 = new Block(1000,100);

  block9 = new Block(1200,100);
  block10 = new Block(1200,100);
  block11= new Block(1200,100);
  block12= new Block(1200,100);
  block13= new Block(1200,100);
  block14= new Block(1200,100);
  block15= new Block(1200,100);

  block16 = new Block(1400,100);
  block17 = new Block(1400,100);
  block18 = new Block(1400,100);
  block19 = new Block(1400,100);
  block20 = new Block(1400,100);
  block21 = new Block(1400,100);
  block22 = new Block(1400,100);
  block23 = new Block(1400,100);

  monster = new Monster(2000,450);

  fly2 = new Fly(monster.body,{x:2000,y:400});

  

}

function draw() {
  background(bg);

  Engine.update(engine);

  ground.diplay();

  hero.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  monster.display();

  


}

function mouseDragged(){

    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}

