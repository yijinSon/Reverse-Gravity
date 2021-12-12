let testBall;

function setup() {
  createCanvas(300, 500);
  testBall = new ball();
}

function draw() {
    background(0);

    checkClicked();

    if (clickCheck==false){
      testBall.normal();
    } else if (clickCheck==true){
      testBall.reverse();
    }


    testBall.display();
}
