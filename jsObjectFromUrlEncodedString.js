const urlDecode = function (text) {
  let equalSign = [];
  let percentSign = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "=") {
      equalSign.push(i);
    } else if (text[i] === "%") {
      percentSign.push(i);
    }
  }
  console.log(equalSign);
  console.log(percentSign);
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);