/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let code = 0;
  let st = s + t;
  for (let item of st) {
    code ^= item.charCodeAt();
  }
  return String.fromCharCode(code);
  // t = t.split('');
  // for (let i = 0, l = s.length; i < l; i++) {
  //   let index = t.indexOf(s[i]);
  //   t.splice(index, 1);
  // }
  // return t[0];
};
