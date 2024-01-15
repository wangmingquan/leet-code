/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let maxArea = 0;
  // 计算面积
  let getArea = (x1, y1, x2, y2, x3, y3) => {
    return Math.abs(
      (x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2) / 2
    );
  };
  let l = points.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      for (let k = j + 1; k < l; k++) {
        let area = getArea(
          points[i][0],
          points[i][1],
          points[j][0],
          points[j][1],
          points[k][0],
          points[k][1]
        );
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};
