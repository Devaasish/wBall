class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var groundPosition = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill("chocolate")
        rect(groundPosition.x, groundPosition.y, this.width, this.height);
    }
}