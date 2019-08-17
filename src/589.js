/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let arr = [];
  if (!root) return arr;
  arr.push(root.val);
  for (let item of root.children) {
    arr = arr.concat(preorder(item));
  }
  return arr;
};
