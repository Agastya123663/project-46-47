// calculating the goalTimer
function caltimer(){
    if(frameCount % 40 === 0){
      goalTimer ++;
    }
  }

  // setting different images for different timer statuses
  function getTimer(){
    if(frameCount%90 === 0 ){
    timer = timer-1
    }
  
    if(timer === 10){
      image(tenImg,50,350)
    }
    if(timer === 10){
      image(tenImg,50,350)
    }
    if(timer === 9){
      image(nineImg,50,350)
    }
    if(timer === 8){
      image(eightImg,50,350)
    }
    if(timer === 7){
      image(sevenImg,50,350)
    }
    if(timer === 6){
      image(sixImg,50,350)
    }
    if(timer === 5){
      image(fiveImg,50,350)
    }
    if(timer === 4){
      image(fourImg,50,350)
    }
    if(timer === 3){
      image(threeImg,50,350)
    }
    if(timer === 2){
      image(twoImg,50,350)
    }
    if(timer === 1){
      image(oneImg,50,350)
    }
    if(timer === 0){
      image(zeroImg,50,350)
    }
  }
  