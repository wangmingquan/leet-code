/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.split(' ');
  arr = arr.filter(item => {
    return item !== '';
  });
  if (!arr.length) {
    return 0;
  }
  return arr[arr.length - 1].length;
};
