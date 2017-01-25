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

var buttonElement = document.getElementById('button4')
buttonElement.addEventListener('mouseenter', function () {
audio4.play(),console.log('Button 4  was hovered over')
})

var buttonElement = document.getElementById('button5')
buttonElement.addEventListener('mouseenter', function () {
audio5.play(),console.log('Button 5  was hovered over')
})

var buttonElement = document.getElementById('button6')
buttonElement.addEventListener('mouseenter', function () {
audio6.play(),console.log('Button 6 was hovered over')
})


var audio1 = new Audio('coin.wav')
var audio2 = new Audio('powerup.wav')
var audio3 = new Audio('mario.wav')
var audio4 = new Audio('hehoo.wav')
var audio5 = new Audio('weehee.wav')
var audio6 = new Audio('yehoo.wav')
