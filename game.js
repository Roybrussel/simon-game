userClickedPattern = [];

gamePattern = [];

buttonColours = ["red", "blue", "green", "yellow"];

var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var red = new Audio("sounds/red.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var wrong = new Audio("sounds/wrong.mp3");

$(".btn").click(function () {
  var userChosenColour = this.id;
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeOut(50).fadeIn(50);
  randomChosenColour.play();
}
