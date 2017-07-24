(function() {
  'use strict';


})();

var redButton =
  document.getElementById('stopButton');

var redBulb =
  document.getElementById('stopLight');

var orangeButton =
document.getElementById('slowButton');

var orangeBulb =
document.getElementById('slowLight');

var greenButton =
document.getElementById('goButton');

var greenBulb =
document.getElementById('goLight');


redButton.addEventListener("click", function() {
  redBulb.classList.toggle("stop")
});

orangeButton.addEventListener("click", function() {
  orangeBulb.classList.toggle("slow")
});

greenButton.addEventListener("click", function() {
  greenBulb.classList.toggle("go")
});

//Red
redButton.addEventListener("mouseenter", function() {
  console.log('Entered red button')
})
redButton.addEventListener("mouseleave", function() {
  console.log('Left red button')
})
//Orange
orangeButton.addEventListener("mouseenter", function() {
  console.log('Entered orange button')
})
orangeButton.addEventListener("mouseleave", function() {
  console.log('Left orange button')
})


//Green
greenButton.addEventListener("mouseenter", function() {
  console.log('Entered green button')
})
greenButton.addEventListener("mouseleave", function() {
  console.log('Left green button')
})
