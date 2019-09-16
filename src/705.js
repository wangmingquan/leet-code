/**
 * Initialize your data structure here.
 */

var MyHashSet = function() {
  this.hash = new Set();
};

/**
 * @param {number} key
 * @return {void}
 */

MyHashSet.prototype.add = function(key) {
  this.hash.add(key);
};

/**
 * @param {number} key
 * @return {void}
 */

MyHashSet.prototype.remove = function(key) {
  this.hash.delete(key);
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */

MyHashSet.prototype.contains = function(key) {
  return this.hash.has(key);
};

// test case
let hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1)); // 返回 true
console.log(hashSet.contains(3)); // 返回 false (未找到)
hashSet.add(2);
console.log(hashSet.contains(2)); // 返回 true
hashSet.remove(2);
console.log(hashSet.contains(2)); // 返回  false (已经被删除)

