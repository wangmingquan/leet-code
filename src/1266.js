/*
https://leetcode-cn.com/problems/minimum-time-visiting-all-points/
平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。

你可以按照下面的规则在平面上移动：

每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。
必须按照数组中出现的顺序来访问这些点。
*/

/**
 * @param {number[][]} points
 * @return {number}
 */

var minTimeToVisitAllPoints = function (points) {
  let getDistance = (x, y) => {
    let [x1, y1] = x;
    let [x2, y2] = y;
    let stepX = x2 > x1 ? 1 : -1;
    let stepY = y2 > y1 ? 1 : -1;
    let step = 0;

    while (x1 !== x2 && y1 !== y2) {
      x1 += stepX;
      y1 += stepY;
      step++;
    }

    if (x1 === x2) {
      step += Math.abs(y2 - y1);
    }
    if (y1 === y2) {
      step += Math.abs(x2 - x1);
    }

    return step;
  };
  let distance = 0;
  for (let i = 1, l = points.length; i < l; i++) {
    distance += getDistance(points[i - 1], points[i]);
  }
  return distance;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])); // 7
console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]])); // 5
