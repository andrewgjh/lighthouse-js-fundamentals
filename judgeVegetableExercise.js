function judgeVegetable(vegetables, metric) {
  let contestantVegetables = vegetables;
  let largest = 0;
  let winner;
  for (let contestant of contestantVegetables) {
    if (contestant[metric] > largest) {
      largest = contestant[metric];
      winner = contestant;
    }
  }
  return winner.submitter;
}

const vegetables = [{
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric);