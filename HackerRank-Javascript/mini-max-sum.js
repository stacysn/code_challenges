function miniMaxSum(arr) {
  arr.sort();
  let min = 0;
  let max = 0;

  for (let i = 0; arr.length > i; i++) {
    if (i === 0) {
      min += arr[i];
      continue;
    } else if (i === arr.length - 1) {
      max += arr[i];
      continue;
    } else {
      min += arr[i];
      max += arr[i];
    }
  }

  console.log(`${min} ${max}`);
}
