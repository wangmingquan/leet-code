/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root root
 * @param {TreeNode} p p
 * @param {TreeNode} q q
 * @return {TreeNode} 共同祖先
 */
var lowestCommonAncestor = function (root, p, q) {
  // 思路，先把所有的节点的祖先节点维护起来
  // 再去找共同的最近祖先
  let vals = new Map();
  let pParent = [];
  let qParent = [];
  let traval = (root, parents) => {
    let newParents = [];
    newParents = [root, ...parents];
    vals.set(root.val, [root, ...parents]);
    if (root.left) {
      traval(root.left, newParents);
    }
    if (root.right) {
      traval(root.right, newParents);
    }
  };
  traval(root, []);
  pParent = vals.get(typeof p === 'number' ? p : p.val);
  qParent = vals.get(typeof q === 'number' ? q : q.val);
  for (let i = 0, l = pParent.length; i < l; i++) {
    if (qParent.indexOf(pParent[i]) >= 0) {
      return pParent[i];
    }
  }
  return null;
};

// test case
const util = require('../libs/util');
console.log(
  util.treeToArray(
    lowestCommonAncestor(
      util.arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
      2,
      4
    )
  )
);
