/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */

var arraysIntersection = function (arr1, arr2, arr3) {
  let newArr = [];
  for (let i = 0, l = arr1.length; i < l; i++) {
    if (arr2.indexOf(arr1[i]) >= 0 && arr3.indexOf(arr1[i]) >= 0) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};

// test case
console.log(arraysIntersection([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]));
