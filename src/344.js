/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  // let nS = '';
  // let l = s.length;
  // while (l > 0) {
  //   nS += s[l - 1];
  //   l--;
  // }
  // return nS;
  return s.reverse().join('');
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
