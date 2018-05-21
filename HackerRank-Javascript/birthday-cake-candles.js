function birthdayCakeCandles(n, ar) {
  let max = 0;
  let largest = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (ar[i] > largest) {
      largest = ar[i];
      max = 1;
    } else if (ar[i] === largest) {
      max++;
    }
  }
  return max;
}
