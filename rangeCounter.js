function range(start, end, step) {
  let outputNums = [];
  if (end > start && step > 0) {
    for (let counter = start; counter <= end; counter += step) {
      outputNums.push(counter);
    }
  }
  return outputNums;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));