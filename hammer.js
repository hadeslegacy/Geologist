class hammer  {
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, 30, 150, options);
        this.width = 30;
        this.height = 150;
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        //stroke('black')
        //fill('red')
        rectMode(CENTER);
        rect( this.width, this.height);
        pop();
      }
}

