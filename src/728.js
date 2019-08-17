/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let arr = [];
  for (; left <= right; left++) {
    if (left < 10) {
      arr.push(left);
      continue;
    }
    let item = left + '';
    let flag = true;
    for (var i = 0, l = item.length; i < l; i++) {
      if (item[i] == 0) {
        flag = false;
        break;
      }
      if (left % parseInt(item[i]) !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      arr.push(left);
    }
  }
  return arr;
};
