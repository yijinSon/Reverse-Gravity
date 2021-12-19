let balls = [];
let rotateBack;

function setup() {
  createCanvas(800, 1000);
  rotateBack = createGraphics(width, height);
  rotateBack.background(10);

  for(let i=0 ; i<10 ; i++){
    balls[i] = new ball();
  }
}

function draw() {
  background(0);
  graphicBG();

  checkClicked();

  for (let i=0 ; i<balls.length ; i++){
    if (clickCheck == false) {
      balls[i].normal();
    } else if (clickCheck == true) {
      balls[i].reverse();
    }
      balls[i].display();
  }

}
