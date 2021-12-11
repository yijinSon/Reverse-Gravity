var clickCount = 1;
var clickCheck = false;

function mouseRelease(){
  clickCount += 1;
}

function clickCheck(){
  if (clickCount%2 == 0){
    clickCheck = true;
  } else if (clickCount%2 == 1) {
    clickCheck = false;
  }
}
