/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let letterMap = new Map([
    ['A', 'a'],
    ['B', 'b'],
    ['C', 'c'],
    ['D', 'd'],
    ['E', 'e'],
    ['F', 'f'],
    ['G', 'g'],
    ['H', 'h'],
    ['I', 'i'],
    ['J', 'j'],
    ['K', 'k'],
    ['L', 'l'],
    ['M', 'm'],
    ['N', 'n'],
    ['O', 'o'],
    ['P', 'p'],
    ['Q', 'q'],
    ['R', 'r'],
    ['S', 's'],
    ['T', 't'],
    ['U', 'u'],
    ['V', 'v'],
    ['W', 'w'],
    ['X', 'x'],
    ['Y', 'y'],
    ['Z', 'z']
  ]);
  let newStr = '';
  for (var i = 0, l = str.length; i < l; i++) {
    newStr += letterMap.get(str[i]) || str[i];
  }
  return newStr;
};
