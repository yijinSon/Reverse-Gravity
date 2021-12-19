class roundBlock extends gravitySystem{

  constructor(){
    super(random(100,200));
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
    fill(30,150);
    strokeWeight(1);
    stroke(0);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.size*2, this.size*2, 50);
  }
}
