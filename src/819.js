/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph
    .toLocaleLowerCase()
    .replace(/,/g, ', ')
    .replace(/[\!\?',;\.]/g, '');
  const arrP = paragraph.split(' ');
  const map = {};
  arrP.forEach(item => {
    if (item !== '' && banned.indexOf(item) === -1) {
      map[item] = map[item] ? map[item] + 1 : 1;
    }
  });
  let max = 0;
  let word = '';
  for (let key in map) {
    let v = map[key];
    if (v > max) {
      max = v;
      word = key;
    }
  }
  return word;
};

console.log(
  mostCommonWord(
    "Bob hit a ball, the hit BALL flew far after it was hit.",
    ["hit"]
  )
);

console.log(
  mostCommonWord(
    "a, a, a, a, b,b,b,c, c",
    ["a"]
  )
);
