/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

var numSmallerByFrequency = function(queries, words) {
  let results = [];

  const f = (str) => {
    str = str.split('').sort().join('');
    let firstLetter = str[0];
    let count = 1;
    let index = 1;
    while (str[index] === firstLetter) {
      count++;
      index++;
    }
    return count;
  };
  // 求出 words 的全部 F
  let wordsFs = [];
  for (let item of words) {
    wordsFs.push(f(item));
  }

  for (let i = 0, l = queries.length; i < l; i++) {
    let newF = f(queries[i]);
    let moreCount = 0; // query[i] 的 F 小于 words 里每个 F 数量的总和
    for (let item of wordsFs) {
      if (newF < item) {
        moreCount++;
      }
    }
    results.push(moreCount);
  }
  return results;
};

// test case
console.log(numSmallerByFrequency(['cbd'], ['zaaaz']));
console.log(numSmallerByFrequency(['bbb', 'cc'], ['a', 'aa', 'aaa', 'aaaa']));
console.log(numSmallerByFrequency(['bba', 'abaaaaaa', 'aaaaaa', 'bbabbabaab', 'aba', 'aa', 'baab', 'bbbbbb', 'aab', 'bbabbaabb'], ['aaabbb', 'aab', 'babbab', 'babbbb', 'b', 'bbbbbbbbab', 'a', 'bbbbbbbbbb', 'baaabbaab', 'aa']));
