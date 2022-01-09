function lastIndexOf(arr, query) {
  let lastOccurrenceIndex = -1;
  arr.forEach(function (element, index) {
    if (element === query) {
      lastOccurrenceIndex = index;
    }
  })
  return lastOccurrenceIndex;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);