/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  num += '';
  while (num.length > 1) {
    let temp = 0;
    for (let i = 0, l = num.length; i < l; i++) {
      temp += parseInt(num[i]);
    }
    num = temp + '';
  }
  return Number(num);
};
