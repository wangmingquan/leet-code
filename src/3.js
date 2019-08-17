/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let maxLength = 0;
  let currentLength = 0;
  let currentStr = '';
  for (var i = 0, l = s.length; i < l; i++) {
    let arri = s[i];
    let index = currentStr.indexOf(arri);
    if (index >= 0) {
      currentStr = currentStr.substr(index + 1);
      currentLength = currentStr.length;
    }
    currentLength++;
    currentStr += arri;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
};
