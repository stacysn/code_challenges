function getMoneySpent(keyboards, drives, b) {
  let maxSpent = 0;

  keyboards.forEach(keyboard => {
    drives.forEach(drive => {
      if (keyboard + drive > maxSpent && keyboard + drive <= b) {
        maxSpent = keyboard + drive;
      }
    });
  });

  if (maxSpent === 0) {
    return -1;
  } else {
    return maxSpent;
  }
}
