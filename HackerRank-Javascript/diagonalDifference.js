function diagonalDifference(a) {
  let leftTotal = 0;
  let rightTotal = 0;

  for (i = 0, j = a.length - 1; a.length > i; i++, j--) {
    leftTotal += a[i][i];
    rightTotal += a[i][j];
  }
  return Math.abs(leftTotal - rightTotal);
}
