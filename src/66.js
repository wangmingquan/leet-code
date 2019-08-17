/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let needAdd1 = true;
  for (var i = digits.length - 1; i >= 0; i--) {
    let item = digits[i];
    if (needAdd1) {
      item += 1;
    }
    if (item === 10) {
      digits[i] = 0;
      needAdd1 = true;
    } else {
      digits[i] = item;
      needAdd1 = false;
    }
  }
  if (needAdd1) {
    digits.unshift(1);
  }
  return digits;
};
