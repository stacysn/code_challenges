function jumpingOnClouds(cloudArray, jumpLength) {
  let energy = 100;

  for (let i = 0; i < cloudArray.length; i += jumpLength) {
    energy--;
    if (cloudArray[i] === 1) {
      energy -= 2;
    }
  }
  return energy;
}
