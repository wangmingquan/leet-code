/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  let width = 0;
  let line = 1;
  let str = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0, l = S.length; i < l; i++) {
    let letter_width = widths[str.indexOf(S[i])];
    width += letter_width;
    if (width > 100) {
      width = letter_width;
      line++;
    }
  }
  return [line, width];
};
