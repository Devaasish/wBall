const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var mainCanvas;
var engine, world;
var ground;
var box1;

function setup(){
    engine = Engine.create();
    world = engine.world;
    mainCanvas = createCanvas(1200,700);

    ground = new Ground(600,650,1300,20);

    // group 1
    box1 = new Box(720,300,70,70);
    box2 = new Box(720,300,70,70);
    box3 = new Box(720,300,70,70);
    box4 = new Box(720,300,70,70);
    box5 = new Box(720,300,70,70);
    box6 = new Box(720,300,70,70);
    box7 = new Box(720,300,70,70);
    box8 = new Box(720,300,70,70);

    // group 2
    box9 = new Box(820,300,70,70);
    box10 = new Box(820,300,70,70);
    box11 = new Box(820,300,70,70);
    box12 = new Box(820,300,70,70);
    box13 = new Box(820,300,70,70);
    box14 = new Box(820,300,70,70);
    box15 = new Box(820,300,70,70);
    box16 = new Box(820,300,70,70);

    // group 3
    box17 = new Box(920,300,70,70);
    box18 = new Box(920,300,70,70);
    box19 = new Box(920,300,70,70);
    box20 = new Box(920,300,70,70);
    box21 = new Box(920,300,70,70);
    box22 = new Box(920,300,70,70);
    box23 = new Box(920,300,70,70);
    box24 = new Box(920,300,70,70);

    ball = new Ball(200,200,200,200);
    rope = new Rope(ball.body, {x:500,y:50});
}

function draw(){
    background("#ddd");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    ball.display();
    rope.display();
}