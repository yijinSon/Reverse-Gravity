let clickCount = 1;
let clickCheck = false;

function mouseReleased(){
  clickCount += 1;

for (let i=0 ; i<balls.length ; i++) {
  balls[i].acc = createVector(0, random(0.03, 0.05));
  blocks[i].acc = createVector(0, random(0.03, 0.05));
  roundBlocks[i].acc = createVector(0, random(0.03, 0.05));
}



}

function checkClicked(){
  if (clickCount%2 == 0){
    clickCheck = true;
  } else if (clickCount%2 == 1) {
    clickCheck = false;
  }

  for (let i=0 ; i<balls.length ; i++) {
    if (clickCheck == false){
    balls[i].groundCheck = false;
    balls[i].skyCheck = true;
    blocks[i].groundCheck = false;
    blocks[i].skyCheck = true;
    roundBlocks[i].groundCheck = false;
    roundBlocks[i].skyCheck = true;
  } else if (clickCheck == true){
    balls[i].skyCheck = false;
    balls[i].groundCheck = true;
    blocks[i].skyCheck = false;
    blocks[i].groundCheck = true;
    roundBlocks[i].skyCheck = false;
    roundBlocks[i].groundCheck = true;
  }
 }
}
