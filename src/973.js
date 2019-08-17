/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  points.sort((a, b) => {
    let sqrtA = Math.abs(a[0] * a[0]) + Math.abs(a[1] * a[1]);
    let sqrtB = Math.abs(b[0] * b[0]) + Math.abs(b[1] * b[1]);
    return sqrtA <= sqrtB ? -1 : 1;
  });
  return points.slice(0, K);
};
