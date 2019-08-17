/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  n = n.toString(2);
  let flag = true;
  for (let i = 1, l = n.length; i < l; i++) {
    if (n[i] === n[i - 1]) {
      flag = false;
      break;
    }
  }
  return flag;
};
