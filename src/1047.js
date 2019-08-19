/**
 * @param {string} S repeat Str
 * @return {string} no-repeat str
 */
var removeDuplicates = function (S) {
  let ss = S.split('');
  for (let i = 0, l = ss.length; i < l - 1; i++) {
    if (ss[i] === ss[i + 1]) {
      ss.splice(i, 2);
      i -= 2;
      if (i < -1) {
        i = -1;
      }
      l -= 2;
    }
  }
  return ss.join('');
};

// test
console.log(removeDuplicates('abbaca'));
