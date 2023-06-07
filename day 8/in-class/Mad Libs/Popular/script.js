var gameMode = "input adjective";
var adjective = [];
var randomAdjective = "";
var popularRandomAdjective = [];
var popularRandomAdjectiveIndex = 0;
var popularRandomAdjectiveScore = [];

var main = function (input) {
  // inputLowerCase = input.toLowerCase();
  inputLowerCase = input;
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

  if (gameMode == "input adjective" && inputLowerCase == "create") {
    gameMode = "create";
    // console.log("line 28 ran");
    myOutputValue = finalMessage();
  }

  if (gameMode == "create" && inputLowerCase == "") {
    // console.log("line 33 ran");
    myOutputValue = finalMessage();
  }
  return myOutputValue;
};

var finalMessage = function () {
  //choose random adj
  randomAdjective = getRandomAdjective();
  generatePopularAdjective(randomAdjective);
  // popularRandomAdjectiveIndex = identifyPopularAdjectiveIndex(randomAdjective);
  // console.log(popularRandomAdjectiveIndex);
  // addPopularAdjectiveScore(popularRandomAdjectiveIndex);
  //output it inside fixed sentence
  var madLib =
    '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
    randomAdjective +
    " wife.";
  return madLib;
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

var generatePopularAdjective = function (randomAdjective) {
  var found = false;
  var index = 0;
  while (index < popularRandomAdjective.length + 1) {
    var currentAdjective = popularRandomAdjective[index];
    if (currentAdjective == randomAdjective) {
      found = true;
      popularRandomAdjectiveIndex = index;
    }
    // console.log("before index = index + 1", index);
    index = index + 1;
    // console.log("after index = index + 1", index);
  }

  if (!found) {
    popularRandomAdjective.push(randomAdjective);
    console.log("not found thus pushed initial score");
    console.log("popularRandomAdjective array: " + popularRandomAdjective);
    pushPopularAdjectiveScore();
    console.log(
      "popularRandomAdjectiveScore array: " + popularRandomAdjectiveScore
    );
  }

  if (found) {
    console.log("popularRandomAdjective array: " + popularRandomAdjective);
    console.log(
      "found & popularRandomAdjectiveIndex: " + popularRandomAdjectiveIndex
    );
    addPopularAdjectiveScore(popularRandomAdjectiveIndex);
    console.log(
      "found & popularRandomAdjectiveScore: " + popularRandomAdjectiveScore
    );
  }
};

// this works
var pushPopularAdjectiveScore = function () {
  popularRandomAdjectiveScore.push(1);
};

var identifyPopularAdjectiveIndex = function (randomAdjective) {
  var index = 0;
  while (index < popularRandomAdjective.length + 1) {
    var currentAdjective = popularRandomAdjective[index];
    if (currentAdjective == randomAdjective) {
      return index;
    }
    index = index + 1;
  }
};

var addPopularAdjectiveScore = function (popularRandomAdjectiveIndex) {
  popularRandomAdjectiveScore[popularRandomAdjectiveIndex] =
    popularRandomAdjectiveScore[popularRandomAdjectiveIndex] + 1;
};
