var main = function (input) {
  var myOutputValue = "";
  var columnCount = 0;
  var rowCount = 0;

  // row will build the column vertically
  while (rowCount < input) {
    // column will build the emoji horizontally
    while (columnCount < input) {
      myOutputValue = myOutputValue + "👍";
      columnCount = columnCount + 1;
    }
    columnCount = 0;
    myOutputValue = myOutputValue + "<br>";
    rowCount = rowCount + 1;
  }

  return myOutputValue;
};
