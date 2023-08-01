/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let same = true;
    const travl = (item1, item2) => {
        if (item1 === null && item2 === null) return;
        if (item1?.val === item2?.val) {
            travl(item1.left, item2.left);
            travl(item1.right, item2.right);
        } else {
            same = false;
        }
    }
    travl(p, q);
    return same;
};
