/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let count = 0;
  const strs = s.split('');
  for (let i = 0, l = strs.length; i < l; i++) {
    const split = i + 1;
    for (let j = i; j >= 0; j--) {
      const cutDistance = i - j + 1;
      const left = s.substring(j, split);
      const right = s.substring(split, split + cutDistance);
      // console.log({ i, cutDistance, left, right});
      if (
        left.length === right.length
        && /^(0+|1+)$/.test(left)
        && /^(0+|1+)$/.test(right)
        && left[0] !== right[0]
      ) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

console.log(countBinarySubstrings('00110011')); // 6
console.log(countBinarySubstrings('10101')); // 4
console.log(countBinarySubstrings('00110')); // 3
