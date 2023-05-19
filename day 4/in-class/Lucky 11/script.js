var main = function (input) {
  // set 2 variables for 2 dice
  // Generate a random dice number for each dice
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = "you lose";
  console.log(randomDiceNumber1, randomDiceNumber2);

  // If 1 dice matches their guess, user win
  // if total dice roll equal 11, user win
  if (input == randomDiceNumber1 || input == randomDiceNumber2) {
    myOutputValue = "you win";
  }

  if (randomDiceNumber1 + randomDiceNumber2 == 11) {
    myOutputValue = "you win";
  }

  // Return output.
  return myOutputValue;
};

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
