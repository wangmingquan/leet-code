/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let fisrtCap = false;
  let capLength = 0;
  for (let i = 0, l = word.length; i < l; i++) {
    let charCodeAt = word[i].charCodeAt();
    let isCap = charCodeAt >= 65 && charCodeAt <= 90;
    if (isCap) {
      capLength++;
      if (i === 0) {
        fisrtCap = true;
      }
    }
  }
  if (capLength === 0 || capLength === word.length) {
    return true;
  } else if (capLength === 1 && fisrtCap) {
    return true;
  } else {
    return false;
  }
};
