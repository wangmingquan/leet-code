/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  num = num.toString(2).split('');
  for (var i = 0, l = num.length; i < l; i++) {
    num[i] = num[i] === '1' ? 0 : 1;
  }
  num = parseInt(num.join(''), 2);
  return num;
};
