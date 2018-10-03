const minimumDistances = arr => {
  let minDistance;

  for (let i = 0; arr.length > i; i++) {
    for (let j = i + 1; arr.length > j; j++) {
      if (arr[i] === arr[j] && minDistance === undefined) {
        minDistance = Math.abs(i - j);
      } else if (arr[i] === arr[j] && Math.abs(i - j) < minDistance) {
        minDistance = Math.abs(i - j);
      }
    }
  }
  return minDistance === undefined ? -1 : minDistance;
};
