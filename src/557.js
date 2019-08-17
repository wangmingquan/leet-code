/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(' ');
  for (let i = 0, l = s.length; i < l; i++) {
    s[i] = s[i]
      .split('')
      .reverse()
      .join('');
  }
  return s.join(' ');
};
