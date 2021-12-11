class ball extends gravitySystem{

  constructor(){
    super(10);
  }

  update(){
    if(clickCheck==false){
      this.normalGravity();
      this.ground();
    } else if (clickCheck==true) {
      this.reverseGravity();
      this.sky();
    }
  }

  display(){
    fill(255);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
