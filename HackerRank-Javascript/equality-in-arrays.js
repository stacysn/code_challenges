const equalizeArray = givenArr => {
  const countedInts = countInts(givenArr);
  return givenArr.length - findAmountOfMostCommon(countedInts);

  function countInts(arr) {
    let intCount = {};

    arr.forEach(element => {
      if (!intCount[element]) {
        intCount[element] = 1;
      } else {
        intCount[element] += 1;
      }
    });
    return intCount;
  }

  function findAmountOfMostCommon(countedInts) {
    let amountOfMostCommon = 0;

    Object.keys(countedInts).forEach(key => {
      if (countedInts[key] > amountOfMostCommon) {
        amountOfMostCommon = countedInts[key];
      }
    });
    return amountOfMostCommon;
  }
};
