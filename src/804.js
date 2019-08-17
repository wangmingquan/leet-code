/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let pwd = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  let str = 'abcdefghijklmnopqrstuvwxyz';
  let set = new Set();
  for (let i = 0, l = words.length; i < l; i++) {
    let letter = '';
    for (let j = 0, jl = words[i].length; j < jl; j++) {
      letter += pwd[str.indexOf(words[i][j])];
    }
    set.add(letter);
  }
  return [...set].length;
};
