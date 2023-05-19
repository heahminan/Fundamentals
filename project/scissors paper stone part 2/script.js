/*
How many hours did you spend on this assignment?:

I recalled 32 hours.

What part of the assignment did you spend the most time on?:

Understanding the game with pseudo code

How comfortable did you feel with this assignment? (1-5):

3

Is there anything in this code that you feel pleased about?:

I DRY my updateResultMessage function.

What's one aspect of your code you would like specific, elaborate feedback on?:

Pseudo code?

*/

var gameMode = "wait for user name input";
var userName = "";
var numberOfPlays = 0;
var numberOfWins = 0;
var numberofLosses = 0;
var numberofDraws = 0;

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "wait for user name input") {
    userName = input;
    gameMode = "begin game";
    myOutputValue =
      userName +
      `, welcome. <br><br>To start the game, you can choose 1 of these options: <br><br>Scissors<br>Paper<br>Stone<br>Reversed Scissors<br>Reversed Paper<br>Reversed Stone`;
  } else {
    myOutputValue = playGame(input);
  }
  return myOutputValue;
};

var playGame = function (oneOfThe6Selections) {
  var gameResults = "";
  var inputTextTrim = oneOfThe6Selections.trim();
  var inputInLowerCase = inputTextTrim.toLowerCase();
  // check if user used the right inputs
  var userInputTestResults = didUserInputPassValidation(inputInLowerCase);

  // if test passed, continue the game
  if (userInputTestResults) {
    numberOfPlays = numberOfPlays + 1;
    // computer choose random number, store # inside variable
    var randomNumber = generateRandomNumber();
    console.log(randomNumber);
    // if # is 1, store computerchoice as scissors
    // if # is 2, store computerchoice as paper
    // if # is 3, store computerchoice as stone
    var computerChoice = mapComputerChoice(randomNumber);
    console.log("Computer Choice is " + computerChoice);
    // now compare input with computerchoice
    // 3 outcomes
    // draw
    // lose
    // win
    gameResults = compareInputWithComputerChoice(
      inputInLowerCase,
      computerChoice
    );
  }

  // if test failed, show error message
  if (!userInputTestResults) {
    gameResults =
      userName +
      ", there are only 6 inputs: <br><br>Scissors<br>Paper<br>Stone<br>Reversed Scissors<br>Reversed Paper<br>Reversed Stone<br><br>Please submit your input again.";
  }
  return gameResults;
};

var didUserInputPassValidation = function (inputInLowerCase) {
  // to ensure input is expected so that checks can be done
  if (
    inputInLowerCase == "scissors" ||
    inputInLowerCase == "paper" ||
    inputInLowerCase == "stone" ||
    inputInLowerCase == "reversed scissors" ||
    inputInLowerCase == "reversed paper" ||
    inputInLowerCase == "reversed stone"
  ) {
    return true;
  }
};

var generateRandomNumber = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var randomNumber = randomInteger + 1;

  return randomNumber;
};

var mapComputerChoice = function (randomNumber) {
  if (randomNumber == 1) {
    return "scissors";
  }

  if (randomNumber == 2) {
    return "paper";
  }

  if (randomNumber == 3) {
    return "stone";
  }
};

var compareInputWithComputerChoice = function (
  inputInLowerCase,
  computerChoice
) {
  console.log(inputInLowerCase, computerChoice);
  if (
    inputInLowerCase == computerChoice ||
    (inputInLowerCase == "reversed scissors" && computerChoice == "scissors") ||
    (inputInLowerCase == "reversed paper" && computerChoice == "paper") ||
    (inputInLowerCase == "reversed stone" && computerChoice == "stone")
  ) {
    numberofDraws = numberofDraws + 1;
    // intent of updateResultMessage is to update the variables with new values
    return userName + ", it's a draw." + updateResultMessage();
  }

  if (
    (inputInLowerCase == "scissors" && computerChoice == "paper") ||
    (inputInLowerCase == "paper" && computerChoice == "stone") ||
    (inputInLowerCase == "stone" && computerChoice == "scissors")
  ) {
    numberOfWins = numberOfWins + 1;
    return userName + ", you won!" + updateResultMessage();
  }

  if (
    (inputInLowerCase == "scissors" && computerChoice == "stone") ||
    (inputInLowerCase == "paper" && computerChoice == "scissors") ||
    (inputInLowerCase == "stone" && computerChoice == "paper")
  ) {
    numberofLosses = numberofLosses + 1;
    return userName + ", you lost!" + updateResultMessage();
  }

  // reversed logic starts here

  if (
    (inputInLowerCase == "reversed scissors" && computerChoice == "paper") ||
    (inputInLowerCase == "reversed paper" && computerChoice == "stone") ||
    (inputInLowerCase == "reversed stone" && computerChoice == "scissors")
  ) {
    numberofLosses = numberofLosses + 1;
    return userName + ", you lost!" + updateResultMessage();
  }

  if (
    (inputInLowerCase == "reversed scissors" && computerChoice == "stone") ||
    (inputInLowerCase == "reversed paper" && computerChoice == "scissors") ||
    (inputInLowerCase == "reversed stone" && computerChoice == "paper")
  ) {
    numberOfWins = numberOfWins + 1;
    return userName + ", you won!" + updateResultMessage();
  }
};

var updateResultMessage = function () {
  return (
    "<br><br>Game Results:<br><br>Number of plays: " +
    numberOfPlays +
    "<br><br>Number of wins: " +
    numberOfWins +
    "<br><br>Number of losses: " +
    numberofLosses +
    "<br><br>Number of draws: " +
    numberofDraws +
    "<br><br>Now you can type Scissors, Paper, Stone, Reversed Scissors, Reversed Paper or Reversed Stone to play another round!"
  );
};
