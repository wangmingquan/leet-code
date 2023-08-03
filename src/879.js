
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const { arrayToTree, treeToArray } = require('../libs/util');

var increasingBST = function (root) {
  if (root === null) return null;

  const newNode = new TreeNode(-1);
  let tempNode = newNode;

  const dfs = (node) => {
    if (node === null) return null;

    dfs(node.left);

    tempNode.right = node;
    node.left = null;
    tempNode = node;

    dfs(node.right);
  }
  dfs(root);

  return newNode.right;
};

const test = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
console.log(
  treeToArray(
    increasingBST(
      arrayToTree(
        test
      )
    )
  )
);
