/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sa = s.split(' ');
  if (sa.length !== pattern.length) return false;
  const map = {};
  let flag = true;
  const set = new Set();
  for (let i = 0, l = sa.length; i < l; i++) {
    const pi = pattern[i];
    const sai = sa[i];
    if (map[pi]) {
      if (map[pi] !== sai) {
        flag = false;
        break;
      }
    } else {
      if (set.has(sa[i])) {
        flag = false;
        break;
      } else {
        map[pi] = sai;
        set.add(sai);
      }
    }
  }
  return flag;
};

console.log(
  wordPattern(
    'abba',
    'dog cat cat dog'
  )
);
