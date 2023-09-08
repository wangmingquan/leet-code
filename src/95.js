
//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n < 1) return [];
  const generator = (start, end) => {
    let ans = [];
    if (start > end) {
      ans.push(null);
    }
    for (let i = start; i <= end; i++) {
      const leftList = generator(start, i - 1);
      const rightList = generator(i + 1, end);
      for (let lItem of leftList) {
        for (let rItem of rightList) {
          ans.push(new TreeNode(i, lItem, rItem));
        }
      }
    }
    return ans;
  }
  return generator(1, n);
};

console.log(generateTrees(3));
