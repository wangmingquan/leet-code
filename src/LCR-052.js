
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
  const newNode = new TreeNode(-1);
  let tempNode = newNode;
  const dfs = node => {
    if (node === null) return;
    dfs(node.left);

    tempNode.right = new TreeNode(node.val);
    tempNode = tempNode.right;

    dfs(node.right)
  };
  dfs(root);
  return newNode.right;
};

const root = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];
console.log(
  increasingBST(
    arrayToTree(
      root
    )
  )
)
