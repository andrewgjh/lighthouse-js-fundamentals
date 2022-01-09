function repeatNumbers(data) {
  let outputNumbers = "";
  for (let array of data) {
    outputNumbers += array[0].toString().repeat(array[1]);
    if (array !== data[data.length - 1]) {
      outputNumbers += ", ";
    }
  }
  return outputNumbers;
}

console.log(repeatNumbers([
  [1, 10]
]));
console.log(repeatNumbers([
  [1, 2],
  [2, 3]
]));
console.log(repeatNumbers([
  [10, 4],
  [34, 6],
  [92, 2]
]));