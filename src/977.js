/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  let squares = [];
  for (let i of A) {
    squares.push(i * i);
  }
  squares.sort((a, b) => a < b ? -1 : 1);
  return squares;
};
