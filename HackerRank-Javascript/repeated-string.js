const repeatedString = (infiniteString, subArraySize) => {
  let subStr = "";

  while (subStr.length < subArraySize) {
    subStr += infiniteString;
  }
  subStr = subStr.substring(0, subArraySize);
  return countA(subStr);

  function countA(str) {
    let strArr = str.split("");
    let aCount = 0;

    strArr.forEach(str => {
      if (str === "a") {
        aCount++;
      }
    });
    return aCount;
  }
};
