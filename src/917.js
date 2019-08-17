/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let letters = [];
  S = S.split('');
  for (let letter of S) {
    let letter_code = letter.charCodeAt();
    if (
      letter_code >= 65 && letter_code <= 90
      || letter_code >= 97 && letter_code <= 122
    ) {
      letters.push(letter);
    }
  }
  let ll = letters.length - 1;
  console.log(letters);
  for (let i = 0, l = S.length; i < l; i++) {
    let letter_code = S[i].charCodeAt();
    if (
      letter_code >= 65 && letter_code <= 90
      || letter_code >= 97 && letter_code <= 122
    ) {
      S[i] = letters[ll];
      ll--;
    }
  }
  return S.join('');
};
