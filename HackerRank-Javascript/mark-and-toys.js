const maximumToys = (prices, budget) => {
  let totalToys = 0;

  prices.sort((a, b) => a - b);
  for (let i = 0; i < prices.length; i++) {
    if (budget > prices[i]) {
      totalToys++;
      budget -= prices[i];
    } else {
      return totalToys;
    }
  }
};
