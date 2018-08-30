function isValid(str) {
  str = str.split("");
  const letterCount = {};
  let size = 0;

  for (let i = 0; str.length > i; i++) {
    if (!letterCount[str[i]]) {
      letterCount[str[i]] = 1;
    } else {
      letterCount[str[i]] = letterCount[str[i]] + 1;
    }
  }
  let currentNum = 0;
  let differences = 0;

  Object.keys(letterCount).forEach(key => {
    size++;

    if (currentNum === 0) {
      currentNum = letterCount[key];
    }
    if (letterCount[key] !== currentNum) {
      if (
        letterCount[key] - currentNum !== 1 ||
        letterCount[key] - currentNum < -1
      ) {
        return "NO";
      } else {
        differences++;
      }
    }
  });

  if (size - differences === 1) {
    differences = 1;
  }

  if (differences === 1) {
    return "YES";
  } else {
    return "NO";
  }
}
