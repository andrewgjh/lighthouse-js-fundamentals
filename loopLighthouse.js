for (let count = 100; count <= 200; count++) {
  if ((count % 3 === 0) && (count % 4 === 0)) {
    console.log("LoopyLighthouse");
  } else if (count % 3 === 0) {
    console.log("Loopy");
  } else if (count % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(count);
  }
}


// stretch project

function loopyLighthouse(range, multiples, words) {
  if (range.length === 2 && multiples.length === 2 && words.length === 2) {
    for (let count = range[0]; count <= range[1]; count++) {
      if ((count % multiples[0] === 0) && (count % multiples[1] === 0)) {
        console.log(words.join(''));
      } else if (count % multiples[0] === 0) {
        console.log(words[0]);
      } else if (count % multiples[1] === 0) {
        console.log(words[1]);
      } else {
        console.log(count);
      }
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);