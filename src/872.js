/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var leafSimilar = function(root1, root2) {
  let getLeafVals = (root) => {
    let leafVals = [];
    let traval = (root) => {
      if (root.left) {
        traval(root.left);
      }
      if (root.right) {
        traval(root.right);
      }
      if (!root.left && !root.right) {
        leafVals.push(root.val);
      }
    };
    traval(root);
    return leafVals;
  };
  let root1LEeafVals = getLeafVals(root1);
  let root2LEeafVals = getLeafVals(root2);
  // console.log(root1LEeafVals);
  // console.log(root2LEeafVals);

  return root1LEeafVals.join('') === root2LEeafVals.join('');
};
