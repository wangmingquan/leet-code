/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const l = s.length;
  let flag = false;
  if (l === 1) {
    return false;
  }
  for (let i = 1, max = Math.floor(l / 2); i <= max; i++) {
    const subString = s.substring(0, i);
    const checkedNewStr = s.split(subString).join('');
    if (checkedNewStr === '') {
      flag = true;
      break;
    }
  }
  return flag;
};

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
