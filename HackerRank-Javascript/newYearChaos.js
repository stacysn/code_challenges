function minimumBribes(q) {
  let bribes = 0;
  let swapped = true;
  let tooChaotic = false;
  let firstRun = true;

  while (swapped === true) {
    swapped = false;
    for (let i = 0; q.length > i; i++) {
      if (q[i] - i > 3 && firstRun) {
        tooChaotic = true;
      }

      if (q[i] && q[i + 1] && q[i] > q[i + 1]) {
        let temp = q[i];
        q[i] = q[i + 1];
        q[i + 1] = temp;
        swapped = true;
        bribes++;
      }
    }
    firstRun = false;
  }

  if (tooChaotic) {
    console.log("Too chaotic");
  } else {
    console.log(bribes);
  }
}
