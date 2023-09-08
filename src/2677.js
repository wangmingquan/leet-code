/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let chunked = [];
  let sub = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    sub.push(arr[i]);
    if (sub.length === size) {
      chunked.push(sub);
      sub = [];
    }
  }
  if (sub.length < size && sub.length > 0) {
    chunked.push(sub);
  }
  return chunked;
};

// const arr = [1, 9, 6, 3, 2], size = 3;
// const arr = [1, 2, 3, 4, 5], size = 1;
// const arr = [8, 5, 3, 2, 6], size = 6;
const arr = [], size = 1;
console.log(chunk(arr, size));
