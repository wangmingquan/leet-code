/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   let pathp = [];
//   let pathq = [];
//   // let commonAncestor = null;
//   const dfs = (node, path) => {
//     if (node === null) return;
//     let currentPath = [node, ...path];
//     if (node === p) {
//       pathp = currentPath;
//     }
//     if (node === q) {
//       pathq = currentPath;
//     }
//     dfs(node.left, currentPath);
//     dfs(node.right, currentPath);
//   };
//   dfs(root, []);
//   for (let i = 0, l = pathp.length; i < l; i++) {
//     for (let j = 0, ll = pathq.length; j < ll; j++) {
//       if (pathp[i] === pathq[j]) {
//         return pathp[i];
//       }
//     }
//   }
//   return null;
// };

var lowestCommonAncestor = function (root, p, q) {
  const rootVal = root.val,
    pVal = p.val,
    qVal = q.val;
  if (rootVal > pVal && rootVal > qVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (rootVal < pVal && rootVal < qVal) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
}

