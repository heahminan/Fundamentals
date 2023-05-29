var gameMode = "user enter the number of dice they wish to roll";
var numberOfDiceToRoll = 0;
var valueOfDiceGuess = 0;
var valueOfDiceRolled = [];
var numberOfPlays = 0;
var numberOfWins = 0;
var numberofLosses = 0;
var guessedCorrectly = false;
var gameWon = false;
var myOutputValue = "";

var main = function (input) {
  // 1st input will store dice
  if (gameMode == "user enter the number of dice they wish to roll") {
    numberOfDiceToRoll = input;
    gameMode = "user enter a guess that will apply to all dice rolls";
    return (myOutputValue =
      "Please enter a guess that will apply to all dice rolls.");
  }

  if (gameMode == "user enter a guess that will apply to all dice rolls") {
    // 2nd input will store guess
    valueOfDiceGuess = input;
    numberOfPlays = numberOfPlays + 1;
    // generate array
    generateDiceRolledArray();
    // check if array has guess
    gameWon = checkResults();
    // assign myOutputValue
    if (gameWon) {
      numberOfWins = numberOfWins + 1;
      myOutputValue =
        "You won!" +
        updateResultMessage() +
        " value of dice guess: " +
        valueOfDiceGuess;
    }

    if (!gameWon) {
      numberofLosses = numberofLosses + 1;
      myOutputValue =
        "You lost!" +
        updateResultMessage() +
        " value of dice guess: " +
        valueOfDiceGuess;
    }

    gameMode = "user enter the number of dice they wish to roll";
    // reason of setting gameWon as false is to reset before checkResults function run again
    guessedCorrectly = false;
    return myOutputValue;
  }
};

var generateDiceRolledArray = function () {
  valueOfDiceRolled = [];
  var timesDiceHasRolled = 0;
  while (timesDiceHasRolled < numberOfDiceToRoll) {
    valueOfDiceRolled.push(generateRandomNumber());
    timesDiceHasRolled = timesDiceHasRolled + 1;
  }
  console.log(valueOfDiceRolled);
};

var generateRandomNumber = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 6 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var randomNumber = randomInteger + 1;

  return randomNumber;
};

var checkResults = function () {
  var count = 0;
  while (count < valueOfDiceRolled.length) {
    // console.log("Inside while loop: " + guessedCorrectly);
    if (!guessedCorrectly) {
      if (valueOfDiceRolled[count] == valueOfDiceGuess) {
        guessedCorrectly = true;
        // console.log("Final result: " + guessedCorrectly);
        return guessedCorrectly;
      }

      if (valueOfDiceRolled[count] != valueOfDiceGuess) {
        guessedCorrectly = false;
        count = count + 1;
      }
    }
  }
  // console.log("Final result: " + guessedCorrectly);
  return guessedCorrectly;
};

var updateResultMessage = function () {
  return (
    "<br><br>Game Results:<br><br>Number of plays: " +
    numberOfPlays +
    "<br><br>Number of wins: " +
    numberOfWins +
    "<br><br>Number of losses: " +
    numberofLosses +
    "<br><br>To play again, you can input the number of dice you wish to roll."
  );
};
