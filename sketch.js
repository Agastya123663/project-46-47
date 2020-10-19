// creating the goalKeepers
var goalKeeper1;
var goalKeeper2;
var goalKeeper3;
var goalKeeper4;
var goalKeeper5
var goalKeeper6
var goalKeeper7
var goalKeeper8

// creating the ball
var ball;

//creating the variables for score,timer,goalTimer and goalKeeperAction
var score = 0 ;
var timer = 10
var goalTimer = 0;
var goalkeeperAction = 0

// creating the gamestates
var start = 0
var play = 1
var end = 2
var gameState = start;

// creating variables for goalPoasts
var goalPoast1;
var goalPoast2;
var goalPoast3;
var goalPoast4;

// creating a variable for instruct
var instruct

// creating variables for bounce
var bounce1
var bounce2
var bounce3
var bounce4
var bounce5
var bounce6
var bounce7
var bounce8

// // creating variables for youLost and tryAgain
var youLost;
var tryAgain

// creating variables for the puzzles
var mathProblem1
var question1;
var option1;
var option2;
var option3;
var option4;
var wrongCoundown = 0;
var correctCoundown = 0;
var wrongCoundown1 = 0;
var correctCoundown1 = 0;
var wrong
var correct
var puzzle
var puzzleQ1;
var puzzleOption1
var puzzleOption2
var puzzleOption3
var puzzleOption4
var correct1

// creating variables for counter
var counter = 0

function preload(){
  fieldImg = loadImage("sprites/field.jpg");
  ballImage = loadImage("sprites/ball.png");
  tenImg = loadImage("sprites/10Img.png");
  nineImg = loadImage("sprites/9Img.png");
  eightImg = loadImage("sprites/8Img.png");
  sevenImg = loadImage("sprites/7Img.png");
  sixImg = loadImage("sprites/6Img.png");
  fiveImg = loadImage("sprites/5Img.png");
  fourImg = loadImage("sprites/4Img.png");
  threeImg = loadImage("sprites/3Img.png");
  twoImg = loadImage("sprites/2Img.png");
  oneImg = loadImage("sprites/1Img.png");
  zeroImg = loadImage("sprites/0Img.png")
  logo = loadImage("sprites/gameLogo.png");
  playImg = loadImage("sprites/play.png");
  scoreImg = loadImage("sprites/scoreImg.png")
  youLostImg = loadImage("sprites/youLostImg.png")
  tryAgainImg = loadImage("sprites/tryAgainImg.png")
  question1Img = loadImage("sprites/question1.png")
  option1Img = loadImage("sprites/1100Img.png")
  option2Img = loadImage("sprites/1110Img.png")
  option3Img = loadImage("sprites/1200Img.png")
  option4Img = loadImage("sprites/1130Img.png")
  wrongImg = loadImage("sprites/wrongImg.png")
  correctImg = loadImage("sprites/correctImg.png")
  mathImg = loadImage("sprites/math.png");
  puzzleImg = loadImage("sprites/puzleImg.png");
  puzzleQ1Img = loadImage("sprites/puzzleQ1Img.png");
  puzzleOption1Img = loadImage("sprites/puzzleOption1Img.png")
  puzzleOption2Img = loadImage("sprites/puzzleOption2Img.png")
  puzzleOption3Img = loadImage("sprites/puzzleOption3Img.png")
  puzzleOption4Img = loadImage("sprites/puzzleOption4Img.png")
  correct1Img = loadImage("sprites/correct1.png");
  goalKeeperImg1 = loadImage("sprites/iai.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  // creating the goalKeepers
  goalKeeper1 = new Goalkeeper(730,145,30,30);
  
  goalKeeper1.shapeColor = "red";
  goalKeeper2 = new Goalkeeper(180,475,30,30);
  goalKeeper2.shapeColor = "blue";
  goalKeeper3 = new Goalkeeper(720,745,30,30);
  goalKeeper3.shapeColor = "pink";
  goalKeeper4 = new Goalkeeper(1325,485,30,30);
  goalKeeper4.shapeColor = "black";

  // creating the goalPoasts
  goalPoast1 = createSprite(120,490,50,110);
  goalPoast1.shapeColor = "black";
  goalPoast2 = createSprite(1380,490,60,110);
  goalPoast2.shapeColor = "black";
  goalPoast3 = createSprite(720,60,100,80);
  goalPoast3.shapeColor = "black";
  goalPoast4 = createSprite(720,840,100,80);
  goalPoast4.shapeColor = "black";

  // creating the mathProblem
  mathProblem1 = createSprite(200,50,40,40);
  mathProblem1.addImage(mathImg)
  mathProblem1.scale = 0.03
  mathProblem1.visible = false;
  
  // creating the puzzles
  puzzle = createSprite(300,50,40,40);
  puzzle.addImage(puzzleImg)
  puzzle.scale = 0.03
  puzzle.visible = false;
  
  

  // creating goalKeepers 5,6,7 and 8
  goalKeeper5 = createSprite(200,100,30,30);
  goalKeeper5.velocityY = goalKeeper5.velocityY = 6;
  goalKeeper5.visible = false;
  goalKeeper5.shapeColor = "white";

  goalKeeper6 = createSprite(1300,200,30,30);
  goalKeeper6.velocityY = 6;
  goalKeeper6.visible = false;
  goalKeeper6.shapeColor = "white";

  goalKeeper7 = createSprite(300,150,30,30);
  goalKeeper7.velocityX = 6;
  goalKeeper7.visible = false;
  goalKeeper7.shapeColor = "white";

  goalKeeper8 = createSprite(300,750,30,30);
  goalKeeper8.velocityX = 6;
  goalKeeper8.visible = false;
  goalKeeper8.shapeColor = "white";

  // creating  wrong,correct and correct1
  wrong = createSprite(720,400,10,10);
  wrong.addImage(wrongImg);
  wrong.visible = false

  correct = createSprite(720,400,10,10);
  correct.addImage(correctImg);
  correct.visible = false
  correct.scale = 2;

  correct1= createSprite(720,400,10,10);
  correct1.addImage(correct1Img);
  correct1.visible = false
  correct1.scale = 2;

  // creating bounce1,2,3,4,5,6,7,8
  bounce1 = createSprite(200,750,100,10);
  bounce1.visible = false;
  bounce2 = createSprite(200,100,100,10)
  bounce2.visible = false;
  bounce3 = createSprite(1300,100,100,10)
  bounce3.visible = false;
  bounce4 = createSprite(1300,750,100,10)
  bounce4.visible = false;
  bounce5 = createSprite(200,150,10,100)
  bounce5.visible = false;
  bounce6 = createSprite(1300,150,10,100)
  bounce6.visible = false;
  bounce7 = createSprite(200,750,10,100)
  bounce7.visible = false;
  bounce8 = createSprite(1300,750,10,100)
  bounce8.visible = false;
 
  // creating the bal
  ball = createSprite(714,480,10,10);
  ball.addImage("ball",ballImage)
  ball.scale = 0.1;

  // creating the playButton
  playButton = createSprite(700,540,10,10);
  playButton.addImage(playImg);
  playButton.visible = false;

  question1 = createSprite(700,400,10,10);
  question1.addImage(question1Img)
  question1.visible = false
  question1.scale = 2

  option1 = createSprite(800,450,10,10);
  option1.addImage(option1Img);
  option1.visible = false;
  option1.scale = 2;

  option2 = createSprite(650,450,10,10);
  option2.addImage(option2Img);
  option2.visible = false;
  option2.scale = 2;

  option3 = createSprite(650,550,10,10);
  option3.addImage(option3Img);
  option3.visible = false;
  option3.scale = 2;

  option4 = createSprite(800,550,10,10);
  option4.addImage(option4Img);
  option4.visible = false;
  option4.scale = 2;

  puzzleQ1 = createSprite(700,250,10,10);
  puzzleQ1.addImage(puzzleQ1Img)
  puzzleQ1.visible = false
  puzzleQ1.scale = 2

  puzzleOption1 = createSprite(650,350,10,10);
  puzzleOption1.addImage(puzzleOption1Img);
  puzzleOption1.visible = false;
  puzzleOption1.scale = 2;

  puzzleOption2 = createSprite(830,350,10,10);
  puzzleOption2.addImage(puzzleOption2Img);
  puzzleOption2.visible = false;
  puzzleOption2.scale = 2;

  puzzleOption3 = createSprite(650,440,10,10);
  puzzleOption3.addImage(puzzleOption3Img);
  puzzleOption3.visible = false;
  puzzleOption3.scale = 2;

  puzzleOption4 = createSprite(830,440,10,10);
  puzzleOption4.addImage(puzzleOption4Img);
  puzzleOption4.visible = false;
  puzzleOption4.scale = 2;

  youLost = createSprite(650,350,10,10);
  youLost.addImage(youLostImg);
  youLost.visible = false;

  tryAgain = createSprite(720,550,10,10)
  tryAgain.addImage(tryAgainImg)
  tryAgain.visible = false


  // creating the football field
  var side1 = createSprite(150,450,5,700)
  side1.shapeColor = "white";
  var side2 = createSprite(750,100,1200,5)
  side2.shapeColor = "white";
  var side3 = createSprite(750,800,1200,5)
  side3.shapeColor = "white";
  var side4 = createSprite(1350,450,5,700)
  side4.shapeColor = "white";
  var side5 = createSprite(250,350,200,5)
  side5.shapeColor = "white";
  var side6 = createSprite(350,500,5,300)
  side6.shapeColor = "white";
  var side7 = createSprite(250,650,200,5)
  side7.shapeColor = "white";
  var side8 = createSprite(200,400,100,5)
  side8.shapeColor = "white";
  var side9 = createSprite(200,600,100,5)
  side9.shapeColor = "white";
  var side10 = createSprite(250,500,5,200)
  side10.shapeColor = "white";
  var side11 = createSprite(120,440,70,5)
  side11.shapeColor = "white";
  var side12 = createSprite(120,550,70,5)
  side12.shapeColor = "white";
  var side13 = createSprite(90,495,5,110)
  side13.shapeColor = "white";
  var side14 = createSprite(1250,350,200,5)
  side14.shapeColor = "white";
  var side15 = createSprite(1150,500,5,300)
  side15.shapeColor = "white";
  var side16 = createSprite(1250,650,200,5)
  side16.shapeColor = "white";
  var side17 = createSprite(1300,400,100,5)
  side17.shapeColor = "white";
  var side18 = createSprite(1300,600,100,5)
  side18.shapeColor = "white";
  var side19 = createSprite(1250,500,5,200)
  side19.shapeColor = "white";
  var side20 = createSprite(1385,440,70,5)
  side20.shapeColor = "white";
  var side21 = createSprite(1385,550,70,5)
  side21.shapeColor = "white";
  var side22 = createSprite(1415,495,5,110)
  side22.shapeColor = "white";
  var side23 = createSprite(570,700,5,200);
  side23.shapeColor = "white";
  var side24 = createSprite(720,600,300,5);
  side24.shapeColor = "white";
  var side25 = createSprite(870,700,5,200);
  side25.shapeColor = "white";
  var side26 = createSprite(620,750,5,100)
  side26.shapeColor = "white";
  var side27 = createSprite(820,750,5,100)
  side27.shapeColor = "white";
  var side28 = createSprite(720,700,210,5)
  side28.shapeColor = "white";
  var side29 = createSprite(670,840,5,80)
  side29.shapeColor = "white";
  var side30 = createSprite(720,880,100,5)
  side30.shapeColor = "white";
  var side31 = createSprite(770,840,5,80)
  side31.shapeColor = "white";
  var side32 = createSprite(570,200,5,200);
  side32.shapeColor = "white";
  var side33 = createSprite(720,300,300,5);
  side33.shapeColor = "white";
  var side34 = createSprite(870,200,5,200);
  side34.shapeColor = "white";
  var side35 = createSprite(620,150,5,100)
  side35.shapeColor = "white";
  var side36 = createSprite(830,150,5,100)
  side36.shapeColor = "white";
  var side37 = createSprite(720,200,220,5)
  side37.shapeColor = "white";
  var side38 = createSprite(670,60,5,80)
  side38.shapeColor = "white";
  var side39 = createSprite(720,20,100,5)
  side39.shapeColor = "white";
  var side40 = createSprite(770,60,5,80)
  side40.shapeColor = "white";

}

function draw() {
  background("green");  
  drawSprites();


    // setting gameState as start
    if(gameState === start){
      image(logo,300,300);
      playButton.visible = true;
    }

    // changing gameState to play
    if(mousePressedOver(playButton)){
      gameState = play
      playButton.visible = false;
    }
  
    // setting gameState as play
    if(gameState === play){

      // function calls
      caltimer();
      getTimer()
      corrrectAnswer1();
      puzzleCorrrectAnswer1();
      
 
      fill("white")
      textFont("comic sans ms")
      textSize(50)
      text(score,1350,70)
      image(scoreImg,1000,10)

    // giving the movement of the goalKeepers
    if(goalTimer>1 && goalTimer<5){
      goalKeeper1.goalKeeperLeftMovement();
      goalKeeper2.goalKeeperDownMovement();
      goalKeeper3.goalKeeperRightMovement();
      goalKeeper4.goalKeeperUpMovement();
      goalkeeperAction = 1
    }
    if(goalTimer>5 && goalTimer<9){
      goalKeeper1.goalKeeperDownMovement();
      goalKeeper2.goalKeeperRightMovement();
      goalKeeper3.goalKeeperUpMovement();
      goalKeeper4.goalKeeperLeftMovement();
      goalkeeperAction = 2
    }
    if(goalTimer>9 && goalTimer<13){
      goalKeeper1.goalKeeperRightMovement();
      goalKeeper2.goalKeeperUpMovement();
      goalKeeper3.goalKeeperLeftMovement();
      goalKeeper4.goalKeeperDownMovement();
      goalkeeperAction = 3
    }
    if(goalTimer>13 && goalTimer<17){
      goalKeeper1.goalKeeperUpMovement();
      goalKeeper2.goalKeeperLeftMovement();
      goalKeeper3.goalKeeperDownMovement();
      goalKeeper4.goalKeeperRightMovement();
      goalkeeperAction = 4
    }
    if(goalTimer>17 && goalTimer<21){
      goalKeeper1.goalKeeperLeftMovement();
      goalKeeper2.goalKeeperDownMovement();
      goalKeeper3.goalKeeperRightMovement();
      goalKeeper4.goalKeeperUpMovement();
      goalkeeperAction = 5
    }
    if(goalTimer>21 && goalTimer<25){
      goalKeeper1.goalKeeperDownMovement();
      goalKeeper2.goalKeeperRightMovement();
      goalKeeper3.goalKeeperUpMovement();
      goalKeeper4.goalKeeperLeftMovement()
      goalkeeperAction = 6
    }

    // calling goalKeepersAction
    if(goalkeeperAction === 6){
      goalKeepersAction();
    }

    // displaying the mathProblem
    if(score === 6 ){
      mathProblem1.visible = true;
    }

    // displaying the options for the mathProblem
    if(mousePressedOver(mathProblem1)){
      mathProblemClicked();
      }

    // displaying the puzzle
    if(score ===10){
      puzzle.visible = true 
    }
      
    // displaying the options for the puzzle
    if(mousePressedOver(puzzle)){
      puzzleClicked();
    }
      
 
    // increasing the timer and score  if the player scores a goal
    if(ball.isTouching(goalPoast1) || ball.isTouching(goalPoast2)|| ball.isTouching(goalPoast3) || ball.isTouching(goalPoast4)) {
      score = score + 1;
      ball.visible = false;
    }

    if(timer < 6 && ball.isTouching(goalPoast1) || ball.isTouching(goalPoast2)|| ball.isTouching(goalPoast3) || ball.isTouching(goalPoast4)  ) {
      timer = timer + 1;
    }

    // calling spawnBalls
    spawnBalls();

    // using the different arrow keys for shooting
    if(keyWentDown("UP_ARROW")){
      ball.velocityY = -30
      
    }

    if(keyWentDown("DOWN_ARROW")){
      ball.velocityY = 30
      
    }

    if(keyWentDown("RIGHT_ARROW")){
      ball.velocityX = 30
      
     }

    if(keyWentDown("LEFT_ARROW")){
      ball.velocityX = -30
      
     } 

     // setting gameState as end if the ball touches the goalKeeper
    if(timer === 0 || goalKeeper1.touching(ball) || goalKeeper2.touching(ball) || goalKeeper3.touching(ball) || goalKeeper4.touching(ball)){
      gameState = end
      console.log("checking end");
    }

    // making the goalKeepers bounce off the edges
    
      goalKeeper5.bounceOff(bounce1)
      goalKeeper5.bounceOff(bounce2)
      goalKeeper6.bounceOff(bounce3)
      goalKeeper6.bounceOff(bounce4)
      goalKeeper7.bounceOff(bounce5)
      goalKeeper7.bounceOff(bounce6)
      goalKeeper8.bounceOff(bounce7)
      goalKeeper8.bounceOff(bounce8)
    
  }

  // setting gameState as end
  if(gameState === end){

    // setting the velocty of the initial goalKeepers as 0
    goalKeeper1.movement(0,0)
    goalKeeper2.movement(0,0)
    goalKeeper3.movement(0,0)
    goalKeeper4.movement(0,0)

    goalKeeper5.velocityY = 0
    goalKeeper6.velocityY = 0
    goalKeeper7.velocityX = 0
    goalKeeper8.velocityX = 0

    // displaying tryAgain and youLost
    tryAgain.visible = true
    youLost.visible = true
   
    // setting the gameState again as start
    if(mousePressedOver(tryAgain)){
      gameReset();
      // destroying the mathProblem
    mathProblem1.destroy();
    question1.destroy();
    option1.destroy();
    option2.destroy();
    option3.destroy();
    option4.destroy();
    wrong.destroy();
    correct.destroy();
    // creating the mathProblem again
  mathProblem1 = createSprite(200,50,40,40);
  mathProblem1.addImage(mathImg)
  mathProblem1.scale = 0.03
  mathProblem1.visible = false;

  question1 = createSprite(700,400,10,10);
  question1.addImage(question1Img)
  question1.visible = false;
  question1.scale = 2

  option1 = createSprite(800,450,10,10);
  option1.addImage(option1Img);
  option1.visible = false;
  option1.scale = 2;

  option2 = createSprite(650,450,10,10);
  option2.addImage(option2Img);
  option2.visible = false;
  option2.scale = 2;

  option3 = createSprite(650,550,10,10);
  option3.addImage(option3Img);
  option3.visible = false;
  option3.scale = 2;

  option4 = createSprite(800,550,10,10);
  option4.addImage(option4Img);
  option4.visible = false;
  option4.scale = 2;

  wrong = createSprite(720,400,10,10);
  wrong.addImage(wrongImg);
  wrong.visible = false

  correct = createSprite(720,400,10,10);
  correct.addImage(correctImg);
  correct.visible = false
  correct.scale = 2;

}

  
    }
  
  }



// funtion definiton for spawnBalls
function spawnBalls(){
  if(ball.isTouching(goalPoast1) || ball.isTouching(goalPoast2)|| ball.isTouching(goalPoast3) || ball.isTouching(goalPoast4)){
    ball.destroy();
    ball = createSprite(714,480,10,10);
    ball.addImage("ball",ballImage)
    ball.scale = 0.1;
  }
}

// function definiton for goalKeepersAction
function goalKeepersAction(){
  if(goalkeeperAction ===6){
    goalKeeper1.destroyGoalKeeper();
    goalKeeper2.destroyGoalKeeper();
    goalKeeper3.destroyGoalKeeper();
    goalKeeper4.destroyGoalKeeper();
    goalKeeper5.visible = true;
    goalKeeper6.visible = true;
    goalKeeper7.visible = true;
    goalKeeper8.visible = true; 
    goalKeepersTouching();
  }
}

// function definiton for goalKeepersTouching
function goalKeepersTouching(){
  if(goalKeeper5.isTouching(ball) || goalKeeper6.isTouching(ball) || goalKeeper7.isTouching(ball) || goalKeeper8.isTouching(ball)){
    gameState = end
  }
}

function gameReset(){
  gameState = start
  goalkeeperAction = 0;
  tryAgain.visible = false
  youLost.visible = false
  goalTimer = 0
  timer = 10
  score = 0
  wrongCoundown = 0
  correctCoundown = 0
  correctCoundown1 = 0
  goalKeeper1.destroyGoalKeeper();
  goalKeeper2.destroyGoalKeeper();
  goalKeeper3.destroyGoalKeeper();
  goalKeeper4.destroyGoalKeeper();

  // creating the goalKeepers again
  goalKeeper1 = new Goalkeeper(730,145,30,30);
  goalKeeper1.shapeColor = "red";
  goalKeeper2 = new Goalkeeper(180,475,30,30);
  goalKeeper2.shapeColor = "blue";
  goalKeeper3 = new Goalkeeper(720,745,30,30);
  goalKeeper3.shapeColor = "pink";
  goalKeeper4 = new Goalkeeper(1325,485,30,30);
  goalKeeper4.shapeColor = "black";

  // creating the ball again
  ball.destroy();
  ball = createSprite(714,480,10,10);
  ball.addImage("ball",ballImage)
  ball.scale = 0.1;

  // destroying the after goalKeepers
  goalKeeper5.destroy();
  goalKeeper6.destroy();
  goalKeeper7.destroy();
  goalKeeper8.destroy();

  // creating the after goalKeepers again
  goalKeeper5 = createSprite(200,100,30,30);
  goalKeeper5.velocityY = 6;
  goalKeeper5.visible = false;
  goalKeeper5.shapeColor = "white";

  goalKeeper6 = createSprite(1300,200,30,30);
  goalKeeper6.velocityY = 6;
  goalKeeper6.visible = false;
  goalKeeper6.shapeColor = "white";

  goalKeeper7 = createSprite(300,150,30,30);
  goalKeeper7.velocityX = 6;
  goalKeeper7.visible = false;
  goalKeeper7.shapeColor = "white";

  goalKeeper8 = createSprite(300,750,30,30);
  goalKeeper8.velocityX = 6;
  goalKeeper8.visible = false;
  goalKeeper8.shapeColor = "white";

  
  


  // destroying the puzzle
  puzzle.destroy();
  puzzleQ1.destroy();
  puzzleOption1.destroy();
  puzzleOption2.destroy();
  puzzleOption3.destroy();
  puzzleOption4.destroy();
  wrong.destroy();
  correct1.destroy();

  // creating the puzzle again
  puzzle = createSprite(300,50,40,40);
  puzzle.addImage(puzzleImg)
  puzzle.scale = 0.03
  puzzle.visible = false;;

  puzzleQ1 = createSprite(700,250,10,10);
  puzzleQ1.addImage(puzzleQ1Img)
  puzzleQ1.visible = false
  puzzleQ1.scale = 2

  puzzleOption1 = createSprite(650,350,10,10);
  puzzleOption1.addImage(puzzleOption1Img);
  puzzleOption1.visible = false;
  puzzleOption1.scale = 2;

  puzzleOption2 = createSprite(830,350,10,10);
  puzzleOption2.addImage(puzzleOption2Img);
  puzzleOption2.visible = false;
  puzzleOption2.scale = 2;

  puzzleOption3 = createSprite(650,440,10,10);
  puzzleOption3.addImage(puzzleOption3Img);
  puzzleOption3.visible = false;
  puzzleOption3.scale = 2;

  puzzleOption4 = createSprite(830,440,10,10);
  puzzleOption4.addImage(puzzleOption4Img);
  puzzleOption4.visible = false;
  puzzleOption4.scale = 2

  wrong = createSprite(720,400,10,10);
  wrong.addImage(wrongImg);
  wrong.visible = false

  correct1 = createSprite(720,400,10,10);
  correct1.addImage(correct1Img);
  correct1.visible = false
  correct1.scale = 2;

}








