
var coinSound = new Audio('sounds/coin.wav')
var powerupSound = new Audio('sounds/powerup.wav')
var marioSound = new Audio('sounds/mario.wav')
var hehooSound = new Audio('sounds/hehoo.wav')
var weeheeSound = new Audio('sounds/weehee.wav')
var yehooSound = new Audio('sounds/yehoo.wav')


var coinElement = document.getElementById('coinButton')
coinElement.addEventListener('click', playCoin);
coinElement.addEventListener('mouseenter', playCoin);
function playCoin(){
 coinSound.play()
}

var oneupElement = document.getElementById('oneupButton')
oneupElement.addEventListener('click', playOneup);
oneupElement.addEventListener('mouseenter', playOneup);
function playOneup(){
 powerupSound.play()
}

var marioElement = document.getElementById('marioButton')
marioElement.addEventListener('click', playMario);
marioElement.addEventListener('mouseenter', playMario);
function playMario(){
 marioSound.play()
}

var hehooElement = document.getElementById('hehooButton')
hehooElement.addEventListener('click', playHehoo);
hehooElement.addEventListener('mouseenter', playHehoo);
function playHehoo(){
 hehooSound.play()
}

var weeheeElement = document.getElementById('weeheeButton')
weeheeElement.addEventListener('click', playWeehee);
weeheeElement.addEventListener('mouseenter', playWeehee);
function playWeehee(){
 weeheeSound.play()
}

var yehooElement = document.getElementById('yehooButton')
yehooElement.addEventListener('click', playYehoo);
yehooElement.addEventListener('mouseenter', playYehoo);
function playYehoo(){
 yehooSound.play()
}
