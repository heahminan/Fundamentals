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

// cost of air con
var main = function (input) {
  var cost = 2 * input * 0.2;
  var myOutputValue =
    "You spent $" + cost.toFixed(2) + " for " + input + " hours";
  return myOutputValue;
};

// screen time
var main = function (input) {
  var myOutputValue = calculate(input);
  return myOutputValue;
};

var calculate = function (x) {
  var hoursPerDay = x;
  var hoursPerYear = hoursPerDay * 365;
  var hoursPerLifetime = hoursPerYear * 82;
  return (
    "You spent " +
    hoursPerLifetime +
    " hours on Whatsapp in your lifetime if you spend " +
    input +
    " hours per day"
  );
};

// mortage calculator
var main = function (input) {
  var totalAmount = calculate1(input).toFixed(2);
  var interestAmount = calculate2(input, totalAmount).toFixed(2);
  var monthlyPayment = calculate3(totalAmount).toFixed(2);
  var myOutputValue = `Total amount = ${totalAmount}. Interest amount = ${interestAmount} Monthly payment = ${monthlyPayment}`;
  return myOutputValue;
};

var calculate1 = function (loanAmount) {
  var totalAmount = loanAmount * 1.03 ** 10;
  return totalAmount;
};

var calculate2 = function (input, totalAmount) {
  var interestAmount = totalAmount - input;
  return interestAmount;
};

var calculate3 = function (totalAmount) {
  var noOfMonths = 10 * 12;
  var monthlyPayment = totalAmount / noOfMonths;
  return monthlyPayment;
};
