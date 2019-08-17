/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  let yuanyinCode = 'aeiouAEIOU';
  S = S.split(' ');
  for (var i = 0, l = S.length; i < l; i++) {
    if (yuanyinCode.indexOf(S[i][0]) < 0) {
      let firstLetter = S[i][0];
      S[i] = S[i].substring(1) + S[i][0];
    }
    S[i] = S[i] + 'ma';
    S[i] = S[i].padEnd(S[i].length + i + 1, 'a');
  }
  return S.join(' ');
};
