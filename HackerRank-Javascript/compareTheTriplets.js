function solve(a0, a1, a2, b0, b1, b2) {
  const scores = [[a0, b0], [a1, b1], [a2, b2]];
  let scoreA = 0;
  let scoreB = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i][0] === scores[i][1]) {
      continue;
    } else if (scores[i][0] > scores[i][1]) {
      scoreA++;
      continue;
    } else {
      scoreB++;
    }
  }
  return [scoreA, scoreB];
}
