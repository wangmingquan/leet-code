/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function (arr, fn) {
//   return arr.filter(fn);
// };

var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

const arr = [0, 10, 20, 30],
  fn = function plusone(n) { return n + 1; };
const newArray = map(arr, fn); // [20, 30]
console.log(newArray);
