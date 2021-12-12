let clickCount = 1;
let clickCheck = false;

function mouseReleased(){
  clickCount += 1;

  testBall.acc = createVector(0, random(0.03, 0.08));

}

function checkClicked(){
  if (clickCount%2 == 0){
    clickCheck = true;
  } else if (clickCount%2 == 1) {
    clickCheck = false;
  }

  if (clickCheck == false){
    testBall.groundCheck = false;
    testBall.skyCheck = true;
  } else if (clickCheck == true){
    testBall.skyCheck = false;
    testBall.groundCheck = true;
  }
}
