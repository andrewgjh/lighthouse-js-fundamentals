

let chooseStations = function (stations) {
  let approved = [];
  for (let station of stations) {
    if (station[1] >= 20) {
      if (station[2] === "school" || station[2] === "community centre") {
        approved.push(station[0]);
      }
    }
  }
  return approved;
}


stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
]
chooseStations(stations);