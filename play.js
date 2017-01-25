var buttonElement = document.getElementById('button1')
buttonElement.addEventListener('click', function () {
 audio1.play(),
  console.log('Button 1  was clicked!')
})

var buttonElement = document.getElementById('button2')
buttonElement.addEventListener('click', function () {
audio2.play(),console.log('Button 2  was clicked!')
})

var buttonElement = document.getElementById('button3')
buttonElement.addEventListener('click', function () {
audio3.play(),console.log('Button 3  was clicked!')
})


var audio1 = new Audio('coin.wav')
var audio2 = new Audio('powerup.wav')
var audio3 = new Audio('mario.wav')
