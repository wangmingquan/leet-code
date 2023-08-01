/**
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function (n) {
  let numbers = [];
  if (n % 2 === 1) {
    numbers.push(0);
  }
  for (let i = 1, l = Math.floor(n / 2); i <= l; i++) {
    numbers.push(i);
    numbers.push(i * -1);
  }
  return numbers;
};

// test
console.log(sumZero(5));
console.log(sumZero(4));
console.log(sumZero(3));
console.log(sumZero(2));
console.log(sumZero(1));
