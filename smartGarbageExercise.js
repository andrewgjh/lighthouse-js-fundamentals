const smartGarbage = function (trash, bins) {
  let ourBins = bins;
  if (trash === "recycling") {
    ourBins.recycling++;
  } else if (trash === "waste") {
    ourBins.waste++;
  } else if (trash === "compost") {
    ourBins.compost++;
  }
  return ourBins;
}

smartGarbage('recycling', {
  waste: 4,
  recycling: 2,
  compost: 5
});