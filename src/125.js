/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase();
  s = s.split('');
  newS = '';
  for (let i = 0, l = s.length; i < l; i++) {
    let code = s[i].charCodeAt();
    if (code >= 48 && code <= 57) {
      newS += s[i];
      continue;
    }
    if (code >= 97 && code <= 122) {
      newS += s[i];
    }
  }
  let i = 0;
  let l = newS.length;
  let flag = true;
  while (i < l / 2) {
    if (newS[i] !== newS[l - i - 1]) {
      flag = false;
      break;
    }
    i++;
  }
  return flag;
};
