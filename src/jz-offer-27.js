/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  const turn = node => {
    if (node === null) return null;
    return new TreeNode(
      node.val,
      turn(node.right),
      turn(node.left),
    );
  };
 return turn(root);
};
