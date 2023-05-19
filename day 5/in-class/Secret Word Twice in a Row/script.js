// computer need to generate random word
var rollSecretWord = function () {
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid number of 1 through 3 inclusive.
  var randomNumber = randomInteger + 1;

  if (randomNumber == 1) {
    return "banana";
  }

  if (randomNumber == 2) {
    return "chisel";
  }

  if (randomNumber == 3) {
    return "faucet";
  }
};

// if user guess equal random word
// show guessed word, show secret word, # of correct guesses still needed
var numberOfCorrectGuessesNeeded = 2;
var currentCorrectGuesses = 0;

var main = function (input) {
  var myOutputValue = "";
  var secretWord = rollSecretWord();

  // input = secretword
  if (input == secretWord) {
    currentCorrectGuesses++;
    // the if below accounts when the user gets his 1st correct guess
    if (currentCorrectGuesses < numberOfCorrectGuessesNeeded) {
      myOutputValue = `Guessed word = ${input} Secret word = ${secretWord} # of correct guesses still needed = ${
        numberOfCorrectGuessesNeeded - currentCorrectGuesses
      }`;
    }
    // the else below accounts when the user gets his 2nd correct guess
    else {
      myOutputValue = `Guessed word = ${input} Secret word = ${secretWord} You won!`;
      // setting currentCorrectGuesses = 0 resets the game
      currentCorrectGuesses = 0;
    }
  } else {
    // input NOT = secret word
    currentCorrectGuesses = 0;
    myOutputValue = `Guessed word = ${input} Secret word = ${secretWord} # of correct guesses still needed = ${numberOfCorrectGuessesNeeded}`;
  }

  // Return output.
  return myOutputValue;
};
