var main = function (input) {
  var myOutputValue = "";
  var columnCount = 0;
  var columnLimit = 0;
  var rowCount = 0;

  // row will build the column vertically
  while (rowCount < input) {
    // column will build the emoji horizontally
    columnLimit = columnLimit + 1;
    while (columnCount < columnLimit) {
      myOutputValue = myOutputValue + "👍";
      columnCount = columnCount + 1;
    }
    // the columnCount is set to zero again so that the emoji can appear again
    columnCount = 0;
    myOutputValue = myOutputValue + "<br>";
    rowCount = rowCount + 1;
  }

  return myOutputValue;
};
