class block extends gravitySystem{

  constructor(){
    super(random(5,10));
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
    rect(this.pos.x, this.pos.y, this.size*2, this.size*2);
  }
}
