/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
  if (!root) {
    return [];
  }
  let paths = [];
  let traval = (root, path) => {
    let val = root.val;
    if (!root.left && !root.right) {
      path += val;
      paths.push(path);
    } else {
      path += val + '->';
    }

    if (root.left) {
      traval(root.left, path);
    }
    if (root.right) {
      traval(root.right, path);
    }
  };
  traval(root, '');
  return paths;
};
