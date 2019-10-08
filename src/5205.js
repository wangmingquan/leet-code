/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
  let countMap = {};
  for (let item of arr) {
    if (countMap[item] === undefined) {
      countMap[item] = 0;
    }
    countMap[item]++;
  }
  let countSet = new Set();
  let countArr = [];
  for (let i in countMap) {
    countArr.push(countMap[i]);
    countSet.add(countMap[i]);
  }
  return countArr.length === countSet.size;
};

// test case
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
