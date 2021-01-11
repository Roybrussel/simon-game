userClickedPattern = [];

gamePattern = [];

buttonColours = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

var gameover = new Audio("sounds/wrong.mp3)");

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
  checkAnswer(userClickedPattern.length);
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

function checkAnswer(currentLevel) {
  if (currentLevel === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    userClickedPattern = [];
  } else {
    gameover.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game Over, Press Any Key to Restart");
  }
}
