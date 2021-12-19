let angle =0;

function graphicBG(){
  // rotateBack.img(cityImg, 0, 0);

  imageMode(CENTER);
  image(cityImg,-width,-height, width*2, height*2);

  angleMode(DEGREES)
  push();
  translate(width/2, height/2);
  rotate(angle);
  image(cityImg,0,0);
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
