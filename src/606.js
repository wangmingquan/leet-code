/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var tree2str = function (root) {
  const dfs = node => {
    if (node === null) return '';
    const leftStr = dfs(node.left);
    const rightStr = dfs(node.right);

    if (leftStr === '' && rightStr === '') {
      return '' + node.val;
    } else if (leftStr === '' && rightStr !== '') {
      return `${node.val}()(${rightStr})`;
    } else if (leftStr !== '' && rightStr === '') {
      return `${node.val}(${leftStr})`;
    }
    return `${node.val}(${leftStr})(${rightStr})`;
  };
  return dfs(root);
};


// test
// const root = [1, 2, 3, null, 4];
const root = [1, 2, 3, 4];
const { arrayToTree } = require('../libs/util');
const res = tree2str(arrayToTree(root));
console.log(res);
// 1(2()(4))(3)
