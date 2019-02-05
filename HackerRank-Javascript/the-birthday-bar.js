const solve = (n, s, d, m) => {
  let count = 0;

  if (s.length === 1 && s[0] === d) {
    return 1;
  }

  s.forEach((item, index) => {
    for (let i = 1; m > i || i === 1; i++) {
      item += s[index + i];
    }
    if (d === item) {
      count++;
    }
  });
  return count;
}
