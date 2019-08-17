/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  let array = text.split(' ');
  let thirds = [];
  for (let i = 0, l = array.length - 2; i < l; i++) {
    if (array[i] === first && array[i + 1] === second) {
      thirds.push(array[i + 2]);
    }
  }
  return thirds;
};
