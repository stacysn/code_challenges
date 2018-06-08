function extraLongFactorials(n) {
    // Complete this function
    const bigFactorial = n => {
      const bigNumber = require('bignumber.js');
      let result = new bigNumber(1);
      for (let i = 1; i <= n; i++) {
        result = result * (i);
      }
      return result.toFixed();
    }
    console.log(bigFactorial(n));
}
