/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let zsCount = 0;
  let isPrimeNumber = num => {
    if (num === 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    let half = Math.ceil(num / 2);
    for (let i = 2; i <= half; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  let isZs = num => {
    let num2 = parseInt(num).toString(2);
    let zss = 0;
    for (let i = 0, l = num2.length; i < l; i++) {
      if (num2[i] === '1') {
        zss++;
      }
    }
    return isPrimeNumber(zss);
  };

  for (; L <= R; L++) {
    if (isZs(L)) {
      zsCount++;
    }
  }
  return zsCount;
};
