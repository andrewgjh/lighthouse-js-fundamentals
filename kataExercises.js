// Kata 1 - Sum Largest Numbers

// function sumLargestNumbers(data) {
//   let sortedArray = data.sort((a, b) => b - a)
//   return sortedArray[0]+sortedArray[1];
// }
function sumLargestNumbers(data) {
  let numArray = data;
  let largest = data[0];
  let second;
  for (let num of numArray) {
    if (num > largest) {
      second = largest;
      largest = num;
    }
  }
  return largest + second;
}
sumLargestNumbers([1, 10]);
sumLargestNumbers([1, 2, 3]);
sumLargestNumbers([10, 4, 34, 6, 92, 2]);




// Kata 2 - Conditional Sums

function conditionalSum(values, condition) {
  let sum = 0;
  for (num of values) {
    if (condition === "even" && num % 2 === 0) {
      sum = sum + num;
    } else if (condition === "odd" && num % 2 !== 0) {
      sum = sum + num;
    }
  }
  return sum
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// Kata 3 - Number of vowels

function numberOfVowels(data) {
  let vowelCount = 0;
  for (let char of data) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("Andrew ho"));


// Kata 4 - Instructor with Longest name

function instructorWithLongestName(instructors) {
  let winner;
  nameCount = 0;
  for (let instructor of instructors) {
    if (instructor.name.length > nameCount) {
      nameCount = instructor.name.length;
      winner = instructor;
    }
  }
  return winner;
}

console.log(instructorWithLongestName([{
    name: "Samuel",
    course: "iOS"
  },
  {
    name: "Jeremiah",
    course: "Web"
  },
  {
    name: "Ophilia",
    course: "Web"
  },
  {
    name: "Donald",
    course: "Web"
  }
]));
console.log(instructorWithLongestName([{
    name: "Matthew",
    course: "Web"
  },
  {
    name: "David",
    course: "iOS"
  },
  {
    name: "Domascus",
    course: "Web"
  }
]));

// Kata 5 - URLEncoded


function urlEncode(text) {
  let newString = "";
  let trimmed = text.trim();
  for (let char of trimmed) {
    if (char === " ") {
      newString += "%20"
    } else if (char !== " ") {
      newString += char;
    }
  }
  return newString;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


// Kata 6 - Where can I park 

function whereCanIPark(spots, vehicle) {
  for (let row = 0; row < spots.length; row++) {
    for (let column = 0; column < spots[row].length; column++) {
      let spot = spots[row][column];
      if (vehicle === "regular") {
        if (spot === 'R') {
          return [column, row];
        }
      } else if (vehicle === "small") {
        if (spot === 'R' || spot === 'S') {
          return [column, row];
        }
      } else if (vehicle === "motorcycle") {
        if (spot === 'R' || spot === 'S' || spot === 'M') {
          return [column, row];
        }
      }
    }
    return false;
  }
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S'] // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));


function checkAir(samples, threshold) {
  let dirtyCount = 0;
  for (let sample of samples) {
    if (sample === "dirty") {
      dirtyCount++;
    }
  }
  if ((dirtyCount / samples.length) > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))