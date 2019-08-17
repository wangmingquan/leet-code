/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let vals = [];
  let traverse = (roots, level) => {
    for (let i = 0, l = roots.length; i < l; i++) {
      if (roots[i]) {
        if (!vals[level]) {
          vals[level] = [];
        }
        vals[level].push(roots[i].val);
        if (roots[i].children.length) {
          traverse(roots[i].children, level + 1);
        }
      }
    }
  };
  traverse([root], 0);
  return vals;
};
