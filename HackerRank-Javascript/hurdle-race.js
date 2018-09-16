function hurdleRace(k, height) {
  let potionsRequired = 0;

  height.forEach(hurdle => {
    if (hurdle > k) {
      potionsRequired += hurdle - k;
      k += hurdle - k;
    }
  });
  return potionsRequired;
}