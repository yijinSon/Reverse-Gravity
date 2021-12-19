class ball extends gravitySystem{

  constructor(){
    super(random(50,100));
  }

  normal(){
      this.normalGravity();
      this.ground();
  }

  reverse(){
      this.reverseGravity();
      this.sky();
  }

  display(){
    fill(255,150);
    strokeWeight(1);
    stroke(0);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
