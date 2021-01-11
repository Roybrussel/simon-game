userClickedPattern = [];

gamePattern = [];

buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  var audio = new Audio(`sounds/${userChosenColour}.mp3`);
  audio.play();
  animatePress(userChosenColour);
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeOut(50).fadeIn(50);
  var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  $(`.${currentColour}`).addClass("pressed");
  setTimeout(function () {
    $(`.${currentColour}`).removeClass("pressed");
  }, 100);
}
