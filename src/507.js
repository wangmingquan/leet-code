/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let count = 0;
  if (num === 0) {
    return false;
  }
  for (let i = 0, l = parseInt(num / 2); i <= l; i++) {
    if (num % i === 0) {
      count += i;
    }
  }
  return count === num;
};
