/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let minA = m, minB = n;
  for (let i = 0; i < ops.length; i++) {
    const [a, b] = ops[i];
    minA = Math.min(minA, a);
    minB = Math.min(minB, b);
  }
  return (minA) * (minB);
};

console.log(
  maxCount(
    3,
    3,
    [
      [2, 2],
      [3, 3]
    ]
  )
); // 9

console.log(
  maxCount(
    3,
    3,
    [[2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3], [2, 2], [3, 3], [3, 3], [3, 3]]
  )
); // 4

console.log(
  maxCount(
    3,
    3,
    []
  )
); // 9

