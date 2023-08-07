
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const { arrayToTree, treeToArray } = require('../libs/util');

var increasingBST = function (root) {
  let newNode = null;
  let tempNode = null;
  const dfs = node => {
    if (node === null) return;
    dfs(node.left);

    if (!newNode) {
      newNode = node;
      tempNode = newNode;
    } else {
      tempNode.right = node;
      tempNode = tempNode.right;
      tempNode.left = null;
    }


    dfs(node.right)
  };
  dfs(root);
  return newNode;
};

const root = [4, 2, 5, 1, 3, null, 6, 0];
console.log(
  increasingBST(
    arrayToTree(
      root
    )
  )
)
