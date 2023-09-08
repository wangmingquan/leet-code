/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }
//   x += '';
//   if (x.length === 1) {
//     return true;
//   }
//   var left = '';
//   var right = '';
//   var revert = '';
//   var xlen = x.length;
//   var len = Math.floor(xlen / 2);
//   left = x.substr(0, len);
//   right = x.substr(xlen - len);
//   for (var i = right.length - 1; i >= 0; i--) {
//     revert += right[i];
//   }
//   return revert === left ? true : false;
// };

// 解法 2
var isPalindrome = function (x) {
  let flag = true;
  const strArr = ('' + x).split('');
  while (strArr.length > 1 && flag) {
    const first = strArr.splice(0, 1);
    const second = strArr.splice(strArr.length - 1, 1);
    flag = first[0] === second[0];
  }
  return flag;
};

console.log(isPalindrome(121));
