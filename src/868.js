/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  let arr = Number(N)
    .toString(2)
    .toString()
    .split('');
  let maxDistance = 0;
  let newDistance = 0;
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === '1') {
      maxDistance = maxDistance > newDistance ? maxDistance : newDistance;
      newDistance = 0;
    }
    newDistance++;
  }
  return maxDistance;
};
