const howManyGames = (gameCost, reduceBy, minCost, dollarsInWallet) => {
  let gamesPurchased = 0;

  while (dollarsInWallet > gameCost) {
    dollarsInWallet -= gameCost;
    gamesPurchased++;

    if (gameCost > minCost) {
      gameCost -= reduceBy;
    }
  }
  return gamesPurchased;
};
