var testBall;

function setup() {
  createCanvas(300, 500);
  testBall = new ball();
  }
}

function draw() {
    background(0);
    mouseReleased();
    clickCheck();
    testBall.update();
    testBall.display();
}
