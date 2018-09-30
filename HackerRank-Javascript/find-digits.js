function findDigits(fullNumber) {
  let divisibleDigits = 0;
  let testNumber = fullNumber.toString().split("");

  testNumber.forEach(digit => {
    if (fullNumber % parseInt(digit) === 0) {
      divisibleDigits++;
    }
  });
  return divisibleDigits;
}
