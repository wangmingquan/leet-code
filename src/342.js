/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;
  while (n >= 0) {
    if (n === 1) {
      return true;
    }
    n /= 4;
    if (!Number.isInteger(n)) {
      return false;
    }
  }
};
