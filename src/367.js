/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  const half = Math.ceil(num / 2);
  for (let i = 1; i <= half; i++) {
    const pow = i * i;
    if (pow === num) return true;
    if (pow > num) {
      return false;
    }
  }
  return false;
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(3));
console.log(isPerfectSquare(4));
console.log(isPerfectSquare(5));
console.log(isPerfectSquare(6));
console.log(isPerfectSquare(7));
console.log(isPerfectSquare(8));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(10));
console.log(isPerfectSquare(11));
