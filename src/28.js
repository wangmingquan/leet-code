/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

var strStr = function (haystack, needle) {
  if (haystack === needle) { return 0; }
  let index = -1;
  const hl = haystack.length;
  const nl = needle.length;
  if (hl < nl) {
    return index;
  }
  for (let i = 0; i <= hl - nl; i++) {
    if (haystack.substr(i, nl) === needle) {
      index = i;
      break;
    }
  }
  return index;
};

console.log(strStr('abc', 'c'));
console.log(strStr('a', 'a'));
