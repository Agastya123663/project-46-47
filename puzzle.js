
// displaying the puzzle when it is clicked
function puzzleClicked(){
  //if(mousePressedOver(puzzle)){
    puzzleQ1.visible = true;
    puzzleOption1.visible = true
    puzzleOption2.visible = true
    puzzleOption3.visible = true
    puzzleOption4.visible = true
  //}
}

// increasing score by 5 if the correctAnswer is chosen
function puzzleCorrrectAnswer1(){
  if(mousePressedOver(puzzleOption1)|| correct1.visible === true){
    counter = 1
    correct1.visible = true
    puzzle.visible = false;
    puzzleQ1.visible = false;
    puzzleOption1.visible = false;
    puzzleOption2.visible = false;
    puzzleOption3.visible = false;
    puzzleOption4.visible = false;
    if(mousePressedOver(puzzleOption1) && counter === 1){
        calScore();
    }
    correctAnswerCoundown1();
    if(correctCoundown1 === 60){
      correct1.visible = false;
    }
  }

  // displaying wrong if wrong answer is chosen
  if(mousePressedOver(puzzleOption2) || mousePressedOver(puzzleOption3) || mousePressedOver(puzzleOption4)|| wrong.visble === true){
    wrong.visible = true;
    puzzle.visible = false;
    puzzleQ1.visible = false;
    puzzleOption2.visible = false;
    puzzleOption1.visible = false;
    puzzleOption3.visible = false;
    puzzleOption4.visible = false;
    wrongAnswerCoundown1();
    if(wrongCoundown1 === 30){
      wrong.visible = false;
    }
  }
}

// increasing wrongCoundown
function wrongAnswerCoundown1(){
  wrongCoundown1++;
}

// increasing correctCoundown
function correctAnswerCoundown1(){
  correctCoundown1++;
}

// increasing the score by 5
function calScore(){
    score = Math.round(score + 1.25);
}
