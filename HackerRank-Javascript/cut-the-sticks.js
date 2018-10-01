const cutTheSticks = stickArr => {
  stickArr.sort((a, b) => a - b);
  let result = [];

  while (stickArr.length > 1) {
    result.push(stickArr.length);
    stickArr = cutSticks(stickArr);
    stickArr = discardSticks(stickArr);
  }
  if (stickArr.length > 0) {
    result.push(stickArr.length);
  }
  return result;

  function cutSticks(arr) {
    let cutSize = arr[0];
    arr = arr.map(stick => {
      return stick - cutSize;
    });
    return arr;
  }

  function discardSticks(arr) {
    for (let i = 0; arr.length > i; i++) {
      if (arr[i] === 0) {
        arr.shift();
        i--;
      } else {
        break;
      }
    }
    return arr;
  }
};
