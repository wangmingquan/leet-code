/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let flag = true;
  let index = 0;
  let prefix = '';
  let len = strs.length;
  while (flag) {
    let str = '';
    for (var i = 0; i < len; i++) {
      let item = strs[i][index];
      if (i === 0) {
        str = item;
      }
      if (item !== str) {
        str = '';
        break;
      }
    }
    if (str) {
      prefix += str;
      index++;
    } else {
      flag = false;
    }
  }
  return prefix;
};
