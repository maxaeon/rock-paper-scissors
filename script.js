var wins = 0;
var ties = 0;
var losses = 0;

var options = ["r", "p", "s"];

var play = function() {
  var userChoice = window.prompt("Want to play rock, paper, scissors? If not, select cancel. Otherwise, enter r, p, or s:");

  if (!userChoice) {
    return;
  }

  userChoice = userChoice.toLowerCase();

  var index = Math.floor(Math.random() * options.length);
  var pcChoice = options[index];

  window.alert("The computer chose " + pcChoice);

  if (userChoice === pcChoice) {
    ties++;
    window.alert("It's a tie.");

  } else if (
    (userChoice === "r" && pcChoice === "s") || 
    (userChoice === "p" && pcChoice === "r") || 
    (userChoice === "s" && pcChoice === "p")
  ) {
    wins++;
    window.alert("You win! :)");

  } else {
    losses++;
    window.alert("You lost :(");
  }

  window.alert(
    "Statistics: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  var startOver = window.confirm("Play again?");

  if (startOver) {
    play();
  }
};

play();
