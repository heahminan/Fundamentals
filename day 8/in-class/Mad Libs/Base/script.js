var gameMode = "input adjective";
var adjective = [];
var randomAdjective = "";

var main = function (input) {
  inputLowerCase = input.toLowerCase();
  if (gameMode == "input adjective" && inputLowerCase == "") {
    myOutputValue = "Error! Input cannot be blank.";
  }

  if (
    gameMode == "input adjective" &&
    inputLowerCase != "" &&
    inputLowerCase != "create"
  ) {
    adjective.push(input);
    myOutputValue =
      "Great!<br><br>Here's your current list: " +
      adjective +
      "<br><br>Once you are ready, type the magic word, create";
  }

  if (inputLowerCase == "create") {
    gameMode = "create";
    myOutputValue = finalMessage();
  }

  if (gameMode == "create") {
    myOutputValue = finalMessage();
  }
  return myOutputValue;
};

let getRandomAdjective = function () {
  adjectiveArrayLength = adjective.length;
  return adjective[getRandomIndex(adjectiveArrayLength)];
};

var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var finalMessage = function () {
  //choose random adj
  randomAdjective = getRandomAdjective();
  //output it inside fixed sentence
  var madLib =
    '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
    randomAdjective +
    " wife.";
  return madLib;
};
