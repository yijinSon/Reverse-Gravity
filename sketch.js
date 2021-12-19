let testBall;
let rotateBack;

function setup() {
  createCanvas(800, 1000);
  rotateBack = createGraphics(width, height);
  rotateBack.background(10);

  testBall = new ball();
}

function draw() {
  background(0);
  graphicBG();

  checkClicked();

  if (clickCheck == false) {
    testBall.normal();
  } else if (clickCheck == true) {
    testBall.reverse();
  }

  testBall.display();

}
