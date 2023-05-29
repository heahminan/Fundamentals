var userName = "";
var progNum = 0;
var progChoice = "";
var userChoice = "";
var timesUserWon = 0;
var timesUserLost = 0;
var timesPlayed = 0;
var mode = "identify";
var getUserName = function (nam) {
  return nam;
};
var pickNum = function () {
  progNum = Math.floor(Math.random() * 3) + 1;
};
var checkProgChoice = function (num) {
  if (num == 1) {
    progChoice = "scissors";
  }
  if (num == 2) {
    progChoice = "paper";
  }
  if (num == 3) {
    progChoice = "stone";
  }
};
var checkWinner = function (choice) {
  userChoice = choice;
  if (userChoice == progChoice) {
    timesPlayed++;
    return `The computer chose ${progChoice}. <br> You chose ${userChoice}. <br> <br> <br> It's a draw. <br> <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (userChoice == "scissors" && progChoice == "paper") {
    timesPlayed++;
    timesUserWon++;
    return `The computer chose ${progChoice}. <br> You chose ${userChoice}. <br> <br> <br> You win! <br> <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (userChoice == "paper" && progChoice == "stone") {
    timesPlayed++;
    timesUserWon++;
    return `The computer chose ${progChoice}. <br> You chose ${userChoice}. <br> <br> <br> You win! <br> <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  if (userChoice == "stone" && progChoice == "scissors") {
    timesPlayed++;
    timesUserWon++;
    return `The computer chose ${progChoice}. <br> You chose ${userChoice}. <br> <br> <br> You win! <br> <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  timesPlayed++;
  timesUserLost++;
  return `The computer chose ${progChoice}. <br> You chose ${userChoice}. <br> <br> <br> You lose... <br> <br> <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
};
var main = function (input) {
  if (mode == "identify") {
    userName = getUserName(input);
    mode = "game";
    return `Please begin playing by entering scissors, paper or stone as your choice`;
  }
  pickNum();
  checkProgChoice(progNum);
  return checkWinner(input);
};
