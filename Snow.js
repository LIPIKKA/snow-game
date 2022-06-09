class Snow{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.04,

        }
        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
        this.radius = 20;

    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }

}