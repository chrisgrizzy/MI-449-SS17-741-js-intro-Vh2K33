var buttonElement = document.getElementById('button1')
buttonElement.addEventListener('click', myfunction);
buttonElement.addEventListener('mouseenter', myfunction);
function myfunction(){
 audio1.play()
}

var buttonElement = document.getElementById('button2')
buttonElement.addEventListener('click', myfunction2);
buttonElement.addEventListener('mouseenter', myfunction2);
function myfunction2(){
 audio2.play()
}

var buttonElement = document.getElementById('button3')
buttonElement.addEventListener('click', myfunction3);
buttonElement.addEventListener('mouseenter', myfunction3);
function myfunction3(){
 audio3.play()
}

var buttonElement = document.getElementById('button4')
buttonElement.addEventListener('click', myfunction4);
buttonElement.addEventListener('mouseenter', myfunction4);
function myfunction4(){
 audio4.play()
}

var buttonElement = document.getElementById('button5')
buttonElement.addEventListener('click', myfunction5);
buttonElement.addEventListener('mouseenter', myfunction5);
function myfunction5(){
 audio5.play()
}

var buttonElement = document.getElementById('button6')
buttonElement.addEventListener('click', myfunction6);
buttonElement.addEventListener('mouseenter', myfunction6);
function myfunction6(){
 audio6.play()
}


var audio1 = new Audio('sounds/coin.wav')
var audio2 = new Audio('sounds/powerup.wav')
var audio3 = new Audio('sounds/mario.wav')
var audio4 = new Audio('sounds/hehoo.wav')
var audio5 = new Audio('sounds/weehee.wav')
var audio6 = new Audio('sounds/yehoo.wav')
