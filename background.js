let angle =0;

function graphicBG(){
  rotateBack.fill(50);
  rotateBack.noStroke();
  rotateBack.rect(0,0,width,200);

  imageMode(CENTER);
  image(rotateBack,0,0);

  angleMode(DEGREES)
  push();
  translate(width/2, height/2);
  rotate(angle);
  image(rotateBack,0,0);
  pop();

  if (clickCheck==true){
    if (angle < 180){
      angle += 3;
    }
  } else if (clickCheck==false){
    if (angle > 0){
      angle -= 3;
    }
  }
}
