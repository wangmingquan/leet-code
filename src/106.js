function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  const length = postorder.length;
  const val = postorder[length - 1];
  const index = inorder.indexOf(val);

  const leftInVals = inorder.slice(0, index);
  const leftPostVals = postorder.slice(0, leftInVals.length );
  const rightInVals = inorder.slice(index + 1, inorder.length);
  const rightPosteVals = postorder.slice(leftInVals.length, postorder.length - 1);

  const left = buildTree(leftInVals, leftPostVals);
  const right = buildTree(rightInVals, rightPosteVals);

  return new TreeNode(val, left, right);
};

const inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3];
// output: [3, 9, 20, null, null, 15, 7]
console.log(
  buildTree(
    inorder, postorder
  )
);
