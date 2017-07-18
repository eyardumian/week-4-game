//create function to load document before running
$(document).ready(function() {

//create variables
var wins = 0;
var losses = 0;
var score = 0;

//create a random number between 1 and 10 for each crystal
var crystal1 = Math.floor(Math.random()*10+1);
var crystal2 = Math.floor(Math.random()*10+1);
var crystal3 = Math.floor(Math.random()*10+1);
var crystal4 = Math.floor(Math.random()*10+1);

//create a random number between 50 and 100
var randomNumber = Math.floor(Math.random()*51+50);

//append random number to numberToMatch id in html
$("#numberToMatch").html(randomNumber);


//when a crystal is clicked, it's value is added to the score
//total score is updated
$("#button1").on ('click',function() {
    score = score + crystal1;
    $('#totalScore').html(score);
    stats();
});

$("#button2").on ('click',function() {
    score = score + crystal2;
    $('#totalScore').html(score);
    stats();
});

$("#button3").on ('click',function() {
    score = score + crystal3;
    $('#totalScore').html(score);
    stats();
});

$("#button4").on ('click',function() {
    score = score + crystal4;
    $('#totalScore').html(score);
    stats();
});

//When a user wins or loses, the game resets
function reset() {
  crystal1 = Math.floor(Math.random()*10+1);
  crystal2 = Math.floor(Math.random()*10+1);
  crystal3 = Math.floor(Math.random()*10+1);
  crystal4 = Math.floor(Math.random()*10+1);
  randomNumber = Math.floor(Math.random()*51+50);
  $('#numberToMatch').html(randomNumber);
  score = 0;
  $("#totalScore").html(score);
};

//if total score equals random number, wins increases and reset game
function win() {
          wins++;
          reset();
          $("#wins").html(wins);
};

//if the total score is larger than the random number, losses increases and reset game
function lose() {
          losses++;
          reset();
          $("#losses").html(losses);
};

function stats() {
  if (score === randomNumber) {
    win();
  } else if (score > randomNumber) {
    lose();
  }
};
});
