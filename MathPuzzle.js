function mathProblemClicked(){
    mathProblem1.destroy();
    question1.visible = true;
    option1.visible = true
    option2.visible = true
    option3.visible = true
    option4.visible = true
  }


function corrrectAnswer1(){
  if(mousePressedOver(option2) || correct.visible === true){
    correct.visible = true;
    wrong.visible = false
    mathProblem1.visible = false;
    question1.visible = false;
    option2.visible = false;
    option1.visible = false;
    option3.visible = false;
    option4.visible = false;
    timer = 10
    correctAnswerCoundown();
    if(correctCoundown === 60){
      correct.visible = false;
    }
  }
 
  if(mousePressedOver(option1) || mousePressedOver(option3) || mousePressedOver(option4)|| wrong.visible === true){
    wrong.visible = true;
    mathProblem1.visible = false;
    question1.visible = false;
    option2.visible = false;
    option1.visible = false;
    option3.visible = false;
    option4.visible = false;
    wrongAnswerCoundown();
    if(wrongCoundown === 30){
      wrong.visible = false;
    }
    
  }


function wrongAnswerCoundown(){
    wrongCoundown++;
  }
  
  function correctAnswerCoundown(){
    correctCoundown++;
  }
  
  

}