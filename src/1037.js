/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  let p1 = points[0];
  let p2 = points[1];
  let p3 = points[2];
  if (p2[0] === p1[0] && p2[1] === p1[1]) {
    return false;
  }
  if (p3[0] === p2[0] && p3[1] === p2[1]) {
    return false;
  }
  if (p3[0] === p2[0] && p2[0] === p1[0]) {
    return false;
  }
  if (p3[1] === p2[1] && p2[1] === p1[1]) {
    return false;
  }
  return (p2[0] - p1[0]) / (p2[1] - p1[1]) !== (p3[0] - p2[0]) / (p3[1] - p2[1]);
};
