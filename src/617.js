
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var mergeTrees = function (root1, root2) {
  const dfs = (n1, n2) => {
    if (n1 === null && n2 === null) return null;
    const val = (n1 !== null ? n1.val : 0) + (n2 !== null ? n2.val : 0);
    const left = dfs(
      n1 !== null ? n1.left : null,
      n2 !== null ? n2.left : null
    );
    const right = dfs(
      n1 !== null ? n1.right : null,
      n2 !== null ? n2.right : null
    );
    return new TreeNode(val, left, right);
  };
  const newNode = dfs(root1, root2);
  return newNode;
};


// test
const root1 = [1, 3, 2, 5], root2 = [2, 1, 3, null, 4, null, 7]
const { arrayToTree, treeToArray} = require('../libs/util');
const res = mergeTrees(arrayToTree(root1), arrayToTree(root2));
// console.log(res);
console.log(treeToArray(res));
// [3,4,5,5,4,null,7]
