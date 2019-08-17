/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let N = S.length;
  let arr = [];
  let newArr = [];
  for (let i = 0; i <= N; i++) {
    arr.push(i);
  }
  for (let i = 0; i < N; i++) {
    if (S[i] === 'I') {
      newArr.push(arr.splice(0, 1)[0]);
    } else {
      newArr.push(arr.splice(arr.length - 1, 1)[0]);
    }
  }
  newArr.push(arr[0]);
  return newArr;
};
