let testBall;
let rotateBack;

function setup() {
  createCanvas(300, 500);
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
