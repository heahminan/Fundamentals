// minutes in weeks
var main = function (input) {
  var numOfMins = input * 7 * 24 * 60;
  var myOutputValue =
    "In " + input + " weeks there are " + numOfMins + " minutes! Wow!";
  return myOutputValue;
};

// ice machine
var main = function (input) {
  var numOfGuests = input;
  var numOfDrinks = input * 2;
  var numOfCubes = numOfDrinks * 4;
  var weightOfCubesInGrams = numOfCubes * 1.5;
  var iceInGramsPerHour = 5 * 453.6;
  var duration = weightOfCubesInGrams / iceInGramsPerHour;
  var myOutputValue =
    "The duration that the ice machine need to run is " +
    duration.toFixed(2) +
    " hours.";
  return myOutputValue;
};
