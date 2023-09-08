
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
// 解法 1，但测试用例量大时，会内存溢出
var numTrees = function (n) {
  const ans = [ 1, 1 ];
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < n -i; j++) {
      ans[i] += ans[i - 1] * ans[j - 1];
    }
  }
  return ans[n];
};

const _t = new Date().getTime();
console.log(numTrees(4));
console.log(new Date().getTime() - _t);
