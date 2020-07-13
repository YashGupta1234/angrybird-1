class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:1.0,
            friction:1.5,
            density:1.0
        }
        this.log=Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter .Body.setAngle(this.log,angle);
        World.add(world,this.log);
    }
    display(){
        //var pos=this.body.position;
        var angle=this.log.angle;
        push ();
        translate(this.log.position.x,this.log.position.y);
        rotate (angle);
        rectMode(CENTER);
        stroke ("green");
        fill("brown");
        rect(0,0,this.width,this.height);
        pop ();
    }
  }