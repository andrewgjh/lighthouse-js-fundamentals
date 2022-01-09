const camelCase = (input) => {
  let string= input.replace(/\s+/g, " ");
  if (string[0] === " "){
    string = string.substr(1);
  }
  if (string[string.length-1] ===" "){
    string = string.substr(0,string.length-1);
  }
  let splitWords = string.split(" ");
  let camelCase = "";
  for (let i=0; i < splitWords.length; i++){
    if (i !== 0){
      splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].substr(1).toLowerCase();
    }else if(i === 0){
      splitWords[i]= splitWords[i].toLowerCase();
    }
    camelCase += splitWords[i];
  }
  return camelCase;
}



console.log(camelCase("     This     is a string    "));
console.log(camelCase("     Loopy      liGhThouse    "));
console.log(camelCase("Supercalifragalisticexpialidocious"));



// const camelCase = (input) => {
//   return input.replace(/(?:^\w|\b\w)/g, (letter, i) => {
//     return i === 0 ? letter.toLowerCase() : letter.toUpperCase();
//   }).replace(/\s+/g, '');
// }