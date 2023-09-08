var pathSum = function (root, sum) {
  let count = 0;
  const dfs = (root, path) => {
    if (root === null) return;
    const newPath = path.concat([root.val]).sort((a, b) => a- b);
    if (!root.left && !root.right) {
      let currentSum = 0;
      for (l = newPath.length - 1; l >= 0; l--) {
        currentSum += newPath[l];
        if (currentSum === sum) {
          count++;
          break;
        }
        if (currentSum > sum) {
          break;
        }
      }
      return;
    }
    dfs(root.left, newPath);
    dfs(root.right, newPath);
  }
  dfs(root, []);
  return count;
};

const {
  arrayToTree
} = require('../libs/util');
const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
const sum = 22;
console.log(
  pathSum(
    arrayToTree(root),
    sum
  )
);
