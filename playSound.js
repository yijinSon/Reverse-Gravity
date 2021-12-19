function normalSound(){
  citySound.stop();
  citySound.play();
}

function weirdSound(){
  citySound.stop();
  citySound.reverseBuffer();
  citySound.play();
}
