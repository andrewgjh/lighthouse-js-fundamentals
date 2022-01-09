const squareCode = function (message) {
  let noSpaceMessage = message.replace(/\s+/g, "");
  let n = Math.ceil(Math.sqrt(noSpaceMessage.length));
  let encryptedOutput = "";
  let characterIndex = 0;
  for (let x = 0; x < n; x++) {
    characterIndex = x;
    for (let i = 0; i < n; i++) {
        encryptedOutput += noSpaceMessage.charAt(characterIndex);
        characterIndex += n;
      if (characterIndex >= noSpaceMessage.length) {
        encryptedOutput += " ";
      }
    }
  }
  return encryptedOutput;
};
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
console.log(squareCode("Itwasthebest of times and the worst of times and there was no end to this damn sentence that goes on and on and on"));



// let arrayCharacters = noSpaceMessage.match(new RegExp('.{1,' + n + '}', 'g'));