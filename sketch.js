let balls = [];
let blocks = [];
let roundBlocks = [];
let rotateBack;
let cityImg, citySound, citySound2;
let normalVolume = 1;
let weirdVolume = 0;

function preload(){
  soundFormats('mp3');
  citySound = loadSound('City.mp3')
  citySound2 = loadSound('City.mp3')
  cityImg = loadImage('city_img.png');
}

function setup() {
  normalSound();
  weirdSound();

  createCanvas(800, 1000);
  rotateBack = createGraphics(width, height);
  rotateBack.background(10);

  for(let i=0 ; i<10 ; i++){
    balls[i] = new ball();
    blocks[i] = new block();
    roundBlocks[i] = new roundBlock();
  }
}

function draw() {
  soundChange();
  background(0);
  graphicBG();
  checkClicked();

  for (let i=0 ; i<balls.length ; i++){
    if (clickCheck == false) {
      balls[i].normal();
      blocks[i].normal();
      roundBlocks[i].normal();
    } else if (clickCheck == true) {
      balls[i].reverse();
      blocks[i].reverse();
      roundBlocks[i].reverse();
    }
      balls[i].display();
      blocks[i].display();
      roundBlocks[i].display();
  }
}
