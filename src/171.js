/**
 * @param {string} s
 * @return {number}
 */

var titleToNumber = function (s) {
  let sum = 0;
  for (let i = 0, l = s.length; i < l; i++) {
    sum = sum * 26 + s[i].charCodeAt() - 64;
  }
  return sum;
};
