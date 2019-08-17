/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isPositiveInt = x > 0;
  let arr = (Math.abs(x) + '').split('');
  let str = '';
  for (var i = arr.length - 1; i >= 0; i--) {
    str += arr[i];
  }
  result = Number(str) * (isPositiveInt ? 1 : -1);
  let periphery = Math.pow(2, 31);
  let min = periphery * -1;
  let max = periphery - 1;
  if (result < min || result > max) {
    return 0;
  } else {
    return result;
  }
};
