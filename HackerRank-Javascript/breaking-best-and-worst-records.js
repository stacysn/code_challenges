function breakingRecords(score) {
  let highest = score[0];
  let lowest = score[0];
  let highestBroken = 0;
  let lowestBroken = 0;

  for (let i = 1; score.length > i; i++) {
    if (score[i] > highest) {
      highestBroken++;
      highest = score[i];
    } else if (score[i] < lowest) {
      lowestBroken++;
      lowest = score[i];
    }
  }
  return [highestBroken, lowestBroken];
}
