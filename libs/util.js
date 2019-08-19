function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

function arrayToTree (arr) {
  function toNode (item) {
    // 转换数组项至节点
    if (item === null || item === undefined) {
      return null;
    } else {
      return new TreeNode(item);
    }
  }
  let queue = [];
  const tree = toNode(arr.shift());
  queue.push(tree); // 入队列第一个元素
  while (arr.length > 0) {
    // 当数组里还有项的时候就拿数组的项去填充队列
    let current = queue.shift();
    current.left = toNode(arr.shift());
    current.right = toNode(arr.shift());
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return tree;
}

function treeToArray (root) {
  let queue = [];
  let list = [];
  queue.push(root);
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.left) {
      list.push(current.left.val);
      queue.push(current.left);
    } else {
      list.push(null);
    }
    if (current.right) {
      list.push(current.right.val);
      queue.push(current.right);
    } else {
      list.push(null);
    }
  }
  // 我们在深度优先遍历的时候将节点保存下来，如果是null也保存，完全二叉树的性质要求我们不能有null混在值中
  // 拿到这个list之后
  // 第一步是将最后连续的null删掉
  let point = list.length - 1; // 从表最后开始看
  while (list[point] === null) {
    list.pop();
    point--;
  }
  // 之后再检查list中是否还有null，如果没有就是完全二叉树，有就不是
  // return list.every((item)=>{return item!==null})
  return [root.val].concat(list); // 换成输出这行代码就能输出二叉树的数组表示形式，与我们前面那个arrayToBinary方法正好相反
}

module.exports = {
  arrayToTree,
  treeToArray
};
