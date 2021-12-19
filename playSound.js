function normalSound(){
  // citySound.play();
  citySound.loop();

}

function weirdSound(){
  citySound2.reverseBuffer();
  // citySound2.play();
  citySound2.loop();

}

function soundChange(){
  citySound.setVolume(normalVolume);
  citySound2.setVolume(weirdVolume);

  if(clickCheck == false){
    if (normalVolume<1){
      normalVolume += 0.1;
    } else {
      normalVolume = 1;
    }
    normalVolume = 1;
    if (weirdVolume>0) {
      weirdVolume -= 0.1;
    } else {
      weirdVolume = 0;
    }
  } else if (clickCheck == true){
    if (normalVolume>0){
      normalVolume -= 0.1;
    } else {
      normalVolume = 0;
    }
    if (weirdVolume<1){
      weirdVolume += 0.1;
    } else {
      weirdVolume = 1;
    }
  }
}
