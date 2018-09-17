function bonAppetit(bill, k, b) {
  let correctSplit = 0;

  bill.forEach((item, index) => {
    if (index !== k) {
      correctSplit += item;
    }
  });
  correctSplit = b - correctSplit * 0.5;

  if (correctSplit === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(correctSplit);
  }
}
