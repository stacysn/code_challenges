function sockMerchant(n, ar) {
  let totalPairs = 0;
  const socks = {};

  ar.forEach(sock => {
    if (!socks[sock]) {
      socks[sock] = 1;
    } else {
      socks[sock] += 1;
    }
  });
  Object.keys(socks).forEach(key => {
    if (socks[key] % 2 !== 0) {
      totalPairs += socks[key] - 1;
    } else {
      totalPairs += socks[key];
    }
  });

  return totalPairs / 2;
}
