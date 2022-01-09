function multiplicationTable(maxValue) {
  let multiplicationTable = "";
  for (let row = 1; row <= maxValue; row++) {
    for (let column = 1; column <= maxValue; column++) {
      multiplicationTable += (column * row).toString();
      if (column !== maxValue) {
        multiplicationTable += " ";
      } else {
        multiplicationTable += "\n";
      }
    }
  }
  return multiplicationTable;
}


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));