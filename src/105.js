
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;
  const val = preorder[0];
  const index = inorder.indexOf(val);
  const leftInVals = inorder.slice(0, index);
  const leftPreVals = preorder.slice(1, leftInVals.length + 1);
  const rightInVals = inorder.slice(index + 1, inorder.length);
  const rightPreVals = preorder.slice(leftInVals.length + 1, inorder.length);

  const left = buildTree(leftPreVals, leftInVals);
  const right = buildTree(rightPreVals, rightInVals);

  return new TreeNode(val, left, right);
};

const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7];
// const preorder = [-1], inorder = [-1];
// output [3,9,20,null,null,15,7]
console.log(
  buildTree(
    preorder, inorder
  )
);
