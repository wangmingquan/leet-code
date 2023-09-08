/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  this.start = n;

  return function () {
    return this.start++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
