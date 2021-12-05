var snowy = [];

let naturalSound;

function preload(){
  soundFormats('mp3');
  naturalSound = loadSound("City.mp3")
}

function playSound(){

  if(mouseIsPressd==false){
    naturalSound.play();
  } else{
    naturalSound.stop();
    naturalSound.reverseBuffer();
    naturalSound.play();
  }
}

function setup() {
  createCanvas(300, 500);
  for (let i=0 ; i<100 ; i++){
    snowy[i] = new Snow();
  }
}

function draw() {
    background(0);
  for (let i=0 ; i<snowy.length ; i++){
    snowy[i].update();
    snowy[i].display();
    snowy[i].ground();
  }

}
