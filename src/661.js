/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const getGrayValue = (arrs, x, y) => {
    let count = 0, sum = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (arrs[i] && arrs[i][j] !== undefined) {
          count++;
          sum += arrs[i][j];
        }
      }
    }
    if (sum === 0) return 0;
    return Math.floor(sum / count);
  }
  const newImg = [];
  for (let i = 0; i < img.length; i++) {
    newImg.push([]);
    for (let j = 0; j < img[i].length; j++) {
      newImg[i].push(getGrayValue(img, i, j));
    }
  }
  return newImg;
};


console.log(
  imageSmoother(
    [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
  )
); // [[0, 0, 0],[0, 0, 0], [0, 0, 0]]

console.log(
  imageSmoother(
    [[100, 200, 100], [200, 50, 200], [100, 200, 100]]
  )
); // [[137,141,137],[141,138,141],[137,141,137]]

console.log(
  imageSmoother(
    [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]]
  )
); //[[4,4,5],[5,6,6],[8,9,9],[11,12,12],[13,13,14]]
