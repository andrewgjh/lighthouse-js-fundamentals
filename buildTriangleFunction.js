function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}


function makeTriangle(base) {
  let triangle ="";
for(let i = 1; i <= base; i++){
  triangle += makeLine(i)
}
return triangle;
}
