function utopianTree(n) {
  let height = 1;

  for (let i = 0; n > i; i++) {
    if (i % 2 === 0) {
      height *= 2;
    } else {
      height++;
    }
  }
  return height;
}
