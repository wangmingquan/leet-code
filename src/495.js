/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let count = 0;
  let pre = 0;
  for (let i = 0, l = timeSeries.length; i < l; i++) {
    const current  = timeSeries[i];
    if (pre < current) {
      count += duration;
    } else {
      count += duration - (pre - current);
    }
    pre = current + duration;
  }
  return count;
};

console.log(findPoisonedDuration([1, 4], 2)); // 4
console.log(findPoisonedDuration([1, 2], 2)); // 3
