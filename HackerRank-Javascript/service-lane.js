const serviceLane = (n, roadWidths, cases) => {
  const result = [];

  cases.forEach(possibleCase => {
    let smallestWidth = roadWidths[possibleCase[0]];

    for (let i = possibleCase[0]; i <= possibleCase[1]; i++) {
      if (roadWidths[i] < smallestWidth) {
        smallestWidth = roadWidths[i];
      }
    }
    result.push(smallestWidth);
  });
  return result;
};
