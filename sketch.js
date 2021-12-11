let testBall;

function setup() {
  createCanvas(300, 500);
  testBall = new ball();
}

function draw() {
    background(0);

    testBall.update();
    testBall.display();
}
