/**
给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

例如：

输入: 二叉搜索树:
    5
  /   \
 2     13

输出: 转换为累加树:
    18
  /   \
20     13
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

// 暴力破解法，先将所有节点遍历出来放在数组中，然后对数组进行排序

var convertBST = function(root) {
  if (!root) return null;
  let nodes = [];
  let traval = root => {
    nodes.push(root);
    if (root.left) {
      traval(root.left);
    }
    if (root.right) {
      traval(root.right);
    }
  };
  traval(root);
  nodes.sort((a, b) => b.val - a.val);
  for (let i = 1, l = nodes.length; i < l; i++) {
    nodes[i].val += nodes[i - 1].val;
  }
  return root;
};
