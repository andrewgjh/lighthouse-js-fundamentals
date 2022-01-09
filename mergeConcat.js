function merge(arr1, arr2) {
  for (let element of arr2) {
    arr1.push(element);
  }
  arr1.sort((a, b) => a - b)
  return arr1;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);