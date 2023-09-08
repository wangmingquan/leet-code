/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let maps = new Map();
  let mapt = new Map();
  for (let i = 0, l = s.length; i < l; i++) {
    const si = s[i], ti = t[i];
    if (maps.has(si) && maps.get(si) !== ti) {
      return false;
    } else {
      maps.set(si, ti);
    }
    if (mapt.has(ti) && mapt.get(ti) !== si) {
      return false;
    } else {
      mapt.set(ti, si);
    }
  }
  return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));
