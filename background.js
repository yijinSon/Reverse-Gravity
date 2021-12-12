let angle =0;

function graphicBG(){
  rotateBack.fill(50);
  rotateBack.noStroke();
  rotateBack.rect(0,0,width,200);

  imageMode(CENTER);
  image(rotateBack,0,0);

  push();
  translate(width/2, height/2);
  rotate(angle);
  image(rotateBack,0,0);
  pop();

  if (clickCheck==true){
    if (angle < 3.13){
      angle += 0.01;
    }
  } else if (clickCheck==false){
    if (angle > 0){
      angle -= 0.01;
    }
  }
}
