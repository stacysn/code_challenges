const camelcase = s => {
  let words = 1;
  s = s.split("");

  s.forEach(letter => {
    if (letter.toUpperCase() === letter) {
      words++;
    }
  });
  return words;
};
