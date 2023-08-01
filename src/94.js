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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const arr = [];
  const traversal = (item) => {
    if (item === null) return null;
    traversal(item.left);
    arr.push(item.val);
    traversal(item.right);
  }
  traversal(root);
  return arr;
};
