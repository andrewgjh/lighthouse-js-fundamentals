function finalPosition(moves) {
  let theSpot = [0, 0];
  for (let eachStep of moves) {
    if (eachStep === "north") {
      theSpot[1]++;
    } else if (eachStep === "south") {
      theSpot[1]--;
    } else if (eachStep === "east") {
      theSpot[0]++;
    } else if (eachStep === "west") {
      theSpot[0]--;
    }
  }
  return theSpot;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

finalPosition(moves);