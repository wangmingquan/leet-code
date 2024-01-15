/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  for (let i = 0, l = s.length; i < l; i++)  {
    if (s === goal) {
      return true;
    }
    s = s.substr(1) + s[0];
  }
  return false;
};
