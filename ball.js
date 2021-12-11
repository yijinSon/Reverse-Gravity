class ball extends gravitySystem(){

  constructor(){
    super(6);
  }

  update(){
    if(clickCheck==false){
      normalGravity();
      ground();
    } else if (clickCheck==true) {
      reverseGravity();
      sky();
    }
  }

  display(){
    fill(255);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
