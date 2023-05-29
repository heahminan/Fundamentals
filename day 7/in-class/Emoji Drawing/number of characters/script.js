// top portion is for 1st exercise
var main = function (input) {
  var myOutputValue = "";
  var rowCount = 0;

  while (rowCount < input) {
    myOutputValue = myOutputValue + "👍";
    rowCount = rowCount + 1;
  }

  return myOutputValue;
};
