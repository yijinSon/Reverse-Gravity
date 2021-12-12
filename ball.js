class ball extends gravitySystem{

  constructor(){
    super(10);
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
    fill(255);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
