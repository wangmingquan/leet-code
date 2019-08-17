/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let arr = [];
  let i = 1;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push('' + i);
    }
    i++;
  }
  return arr;
};
