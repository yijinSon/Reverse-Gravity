class gravitySystem{

  constructor(){
    this.groundCheck = false;
    this.heightCheck = false;
    this.pos = createVector(random(width),0);
    this.vel = createVector(0,0);
    this.acc = createVector(0,random(0.03,0.08));
    this.size = random (2,4);
    this.groundCheck = false;
  }

  update(){
    if (mouseIsPressed){
      this.vel.sub(this.acc);
    } else{
      this.vel.add(this.acc);
    }

    this.pos.add(this.vel);
  }

  display(){
    fill (255,150);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, this.size*2, this.size*2);
  }

    ground(){
    if (mouseIsPressed && this.pos.y < this.size*2){
      this.vel.y = 0;
      this.acc.y = 0;
      this.groundCheck = true;
    } else if (mouseIsPressed == false && this.pos.y > height -this.size*2){
      this.vel.y = 0;
      this.acc.y = 0;
      this.heightCheck = true;
    }

      if (mouseIsPressed && this.groundCheck){
        this.acc.y = random(0.03,0.08)
      } else if (mouseIsPressed == false && this.heightCheck){
        this.acc.y = random(0.03,0.08)
      }

  }
}
