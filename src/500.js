/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let key = 'qwertyuiopasdfghjklzxcvbnm';
  let arr = [];
  for (let i = 0, l = words.length; i < l; i++) {
    let word = words[i];
    let firstline;
    let salineLine = true;
    for (let j = 0, jl = word.length; j < jl; j++) {
      let line = 0;
      let letter = word[j].toLocaleLowerCase();
      let index = key.indexOf(letter);
      if (index <= 9) {
        line = 0;
      } else if (index <= 18) {
        line = 1;
      } else {
        line = 2;
      }
      if (firstline === undefined) {
        firstline = line;
      }
      if (firstline !== line) {
        salineLine = false;
        break;
      }
    }
    if (salineLine) {
      arr.push(word);
    }
  }
  return arr;
};
