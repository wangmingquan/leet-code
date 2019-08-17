/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let sortedArr = [];
  for (let i = 0, l = arr2.length; i < l; i++) {
    let current = arr2[i];
    for (let j = 0, jl = arr1.length; j < jl; j++) {
      if (arr1[j] === current) {
        arr1.splice(j, 1);
        sortedArr.push(current);
        j--;
        jl--;
      }
    }
  }
  arr1.sort((a, b) => a - b);
  return [...sortedArr, ...arr1];
};
