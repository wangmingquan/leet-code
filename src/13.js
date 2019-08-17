/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  let romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  for (var i = s.length - 1; i >= 0; i--) {
    let current = romanMap[s[i]];
    let prev = romanMap[s[i - 1]];
    if (prev < current) {
      current -= prev;
      i--;
    }
    sum += current;
  }
  return sum;
};
