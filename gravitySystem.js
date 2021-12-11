class gravitySystem{

  constructor(s){
    this.groundCheck = false;
    this.skyCheck = false;

    this.pos = createVector(random(width),0);
    this.vel = createVector(0,0);
    this.acc = createVector(0,random(0.03,0.08));
    this.size = s;

    this.groundCheck = false;
  }

  normalGravity(){
    this.vel.add(this.acc);
    this.pos.add(tis.vel);
  }

  reverseGravity(){
    this.vel.sub(this.acc);
    this.pos.add(this.vel);
  }

  ground(){
    if(this.pos.y < this.size){
      this.vel.y = 0;
      this.acc.y = 0;
      this.groundCheck = true;
    }

  sky(){
    if(this.pos.y > height-this.size){
    this.vel.y = 0;
    this.acc.y = 0;
    this.skyCheck = true;
    }
  }
}
