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

var increasingBST = function(root) {
  // 所有节点拿到，然后按节点值进行排序
  let vals = [];
  let trvals = (root) => {
    if (root.left) trvals(root.left);
    vals.push(root.val);
    if (root.right) trvals(root.right);
  };
  trvals(root);

  // 重新生成节点
  let node = null;
  let index = vals.length - 1;
  while (index >= 0) {
    let newNode = new TreeNode(vals[index]);
    newNode.right = node;
    node = newNode;
    index--;
  }
  return node;
};
