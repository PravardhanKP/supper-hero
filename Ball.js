class Ball {
  constructor(x, y, width, height, angle) {
    this.image=loadImage("superhero1.png");
    var options = { 
      density: 1, 
      frictionAir: 0.005
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("superhero1.png");
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    fill(255,0,255)
    imageMode(CENTER);
    image(this.image, 0,0,this.angle, this.angle)
    pop();
  }
}