/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  if (n <= 6) return true;
  while (Number.isInteger(n / 2)) {
    n = n / 2;
  }
  while (Number.isInteger(n / 3)) {
    n = n / 3;
  }
  while (Number.isInteger(n / 5)) {
    n = n / 5;
  }
  return n === 1;
};

console.log(isUgly(7));
console.log(isUgly(8));
console.log(isUgly(9));
console.log(isUgly(10));
console.log(isUgly(11));
console.log(isUgly(12));
console.log(isUgly(13));
