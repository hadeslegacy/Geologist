class rubber  {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':5.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 100, options);
        
        this.radius = 100;
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        //stroke('black')
        //fill('red')
        ellipseMode(CENTER);
        ellipse( this.radius );
        pop();
      }
}