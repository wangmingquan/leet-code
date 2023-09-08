/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function (arr, fn) {
//   return arr.filter(fn);
// };

var filter = function (arr, fn) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const arr = [0, 10, 20, 30],
  fn = function greaterThan10(n) { return n > 10; }
const newArray = filter(arr, fn); // [20, 30]
console.log(newArray);
