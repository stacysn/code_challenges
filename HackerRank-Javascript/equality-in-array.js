const equalizeArray = givenArr => {
  const countedInts = countInts(givenArr);
  return givenArr.length - findLargest(countedInts);
};

const countInts = arr => {
  let countedInts = {};

  arr.forEach(element => {
    if (!countedInts[element]) {
      countedInts[element] = 1;
    } else {
      countedInts[element] += 1;
    }
  });
  return countedInts;
};

const findLargest = countedInts => {
  let largest = 0;

  Object.keys(countedInts).forEach(key => {
    if (countedInts[key] > largest) {
      largest = countedInts[key];
    }
  });
  return largest;
};
