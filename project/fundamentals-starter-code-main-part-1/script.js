var main = function (input) {
  var myOutputValue = "";
  var inputInLowerCase = input.toLowerCase();
  var userInputTestResults = didUserInputPassValidation(inputInLowerCase);
  // console.log(userInputTestResults);
  // if test passed, continue the game
  if (userInputTestResults) {
    var randomNumber = generateRandomNumber();
    console.log(randomNumber);
    var computerChoice = mapComputerChoice(randomNumber);
    console.log("Computer Choice is " + computerChoice);
    myOutputValue = compareInputWithComputerChoice(
      inputInLowerCase,
      computerChoice
    );
  }

  // if test failed, show error message
  if (!userInputTestResults) {
    myOutputValue =
      "There are only 3 inputs - Scissors, Paper, Stone. Please submit your input again.";
  }
  return myOutputValue;
};

// check if user used the right inputs
var didUserInputPassValidation = function (inputInLowerCase) {
  // to ensure input becomes lower case so that checks can be done
  // console.log(massagedInput);
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

// when user input choice, store choice inside variable
// if choice = scissors
// if choice = paper
// if choice = stone
// computer choose random number, store # inside variable
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

// if # is 1, store computerchoice as scissors
// if # is 2, store computerchoice as paper
// if # is 3, store computerchoice as stone

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

// now compare input with computerchoice
// 3 outcomes
// draw
// lose
// win

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
    return "It's a draw. <br> <br>Now you can type Scissors, Paper, Stone, Reversed Scissors, Reversed Paper or Reversed Stone to play another round!";
  }

  if (inputInLowerCase == "scissors" && computerChoice == "paper") {
    return "You won!";
  }

  if (inputInLowerCase == "scissors" && computerChoice == "stone") {
    return "You lost!";
  }

  if (inputInLowerCase == "paper" && computerChoice == "stone") {
    return "You won!";
  }

  if (inputInLowerCase == "paper" && computerChoice == "scissors") {
    return "You lost!";
  }

  if (inputInLowerCase == "stone" && computerChoice == "scissors") {
    return "You won!";
  }

  if (inputInLowerCase == "stone" && computerChoice == "paper") {
    return "You lost!";
  }
  // reversed logic starts here

  if (inputInLowerCase == "reversed scissors" && computerChoice == "paper") {
    return "You lost!";
  }

  if (inputInLowerCase == "reversed scissors" && computerChoice == "stone") {
    return "You won!";
  }

  if (inputInLowerCase == "reversed paper" && computerChoice == "stone") {
    return "You lost!";
  }

  if (inputInLowerCase == "reversed paper" && computerChoice == "scissors") {
    return "You won!";
  }

  if (inputInLowerCase == "reversed stone" && computerChoice == "scissors") {
    return "You lost!";
  }

  if (inputInLowerCase == "reversed stone" && computerChoice == "paper") {
    return "You won!";
  }
};
