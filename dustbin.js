class dustbin
{

    constructor(x,y)
    {

        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinHieght=100;
        this.wallThickness=20;
        this.angle=0;

        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinwidth, this.wallThickness,{isStatic:true})
        this.leftwallBody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-dustbinHieght/2,this.wallThickness,this.dustbinHieght,{isStatic:true})
        Matter.Body.setAngle(this.leftwallBody,this.angle);

        this.rightwallBody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-dustbinHieght/2,this.wallThickness,this.dustbinHieght,{isStatic:true});
        Matter.Body.setAngle(this.rightwallBody,-1*this.angle);
        World.add(world,this.bottomBody)
        World.add(world,this,this.leftwallBody)
        World.add(world,this.rightwallBody);
    }
    display()
    {

     var posBottom=this.bottomBody.position;
     var posLeft=this.leftwallBody.position;
     var posRight=this.rightwallBody.position;

     push()
    translate(posLeft.x,posLeft.y);
    rectMode(CENTER)
    //strokeWwight(4);
    angleMode(RADIANS)
    fill(255);
    stroke(255);
    rotate(this.angle)
    rect(0,0,this.wallThickness,this.dustbinHieght);
    Pop()

    push()
    translate(posRight.x,posRight.y);
    rectMode(CENTER)
    //strokeWwight(4);
    angleMode(RADIANS)
    fill(255);
    stroke(255);
    rotate(-1*this.angle)
    rect(0,0,this.wallThickness,this.dustbinHieght);
    Pop()

   push()
   translate(posBottom.x,posBottom.y);
    rectMode(CENTER)
    //strokeWwight(4);
    angleMode(RADIANS)
    fill(255);
    stroke(255);
    rect(0,0,this.dustbinwidth,this.dustbinHieght);
    Pop()



    }

}