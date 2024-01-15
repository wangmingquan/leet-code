/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let yuanyinCode = 'aeiouAEIOU';
  sentence = sentence.split(' ');
  for (var i = 0, l = sentence.length; i < l; i++) {
    if (yuanyinCode.indexOf(sentence[i][0]) < 0) {
      sentence[i] = sentence[i].substring(1) + sentence[i][0];
    }
    sentence[i] = sentence[i] + 'ma';
    sentence[i] = sentence[i].padEnd(sentence[i].length + i + 1, 'a');
  }
  return sentence.join(' ');
};
