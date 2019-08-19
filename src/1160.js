/**
 * @param {string[]} words words
 * @param {string} chars chars
 * @return {number} countForWords
 */
var countCharacters = function (words, chars) {
  let countForWords = 0;
  for (let i = 0, l = words.length; i < l; i++) {
    let aChars = chars.split('');
    let word = words[i];
    let hasWord = true;
    for (let j = 0, jl = word.length; j < jl; j++) {
      let index = aChars.indexOf(word[j]);
      if (index >= 0) {
        aChars.splice(index, 1);
      } else {
        hasWord = false;
        break;
      }
    }
    if (hasWord) {
      countForWords += word.length;
    }
  }
  return countForWords;
};

// test case
console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
console.log(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'));
