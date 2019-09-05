/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.map = new Map();  
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.map.set(key, value);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  return this.map.get(key) === undefined ? -1 : this.map.get(key);
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  this.map.delete(key);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


// test case
// let  hashMap = new MyHashMap();
// hashMap.put(1, 1);          
// hashMap.put(2, 2);         
// console.log(hashMap.get(1));            // 返回 1
// console.log(hashMap.get(3));            // 返回 -1 (未找到)
// hashMap.put(2, 1);         // 更新已有的值
// console.log(hashMap.get(2));            // 返回 1 
// hashMap.remove(2);         // 删除键为2的数据
// console.log(hashMap.get(20));            // 返回 -1 (未找到) 

let hashMap = new MyHashMap();
hashMap.remove(2);
hashMap.put(3,11);
hashMap.put(4,13);
hashMap.put(15,6);
hashMap.put(6,15);
hashMap.put(8,8);
hashMap.put(11,0);
console.log(hashMap.get(11));
hashMap.put(1,10);
hashMap.put(12,14);

[null,null,null,null,null,null,null,null,0,null,null]