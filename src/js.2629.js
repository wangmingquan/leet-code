/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let index = functions.length - 1;
  return function (x) {
    while (index >= 0) {
      x = functions[index](x);
      index--;
    }
    return x;
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
