/**
 * @see https://leetcode-cn.com/problems/distribute-candies-to-people/
 * @param {number} candies candies
 * @param {number} num_people num_people
 * @return {number[]} data
 */
var distributeCandies = function (candies, num_people) {
  let current_num = 0; // 当前多个人
  let curren_people = 0; // 当前第几人
  let peoples = []; // 发糖情况
  for (let i = 0; i < num_people; i++) {
    peoples.push(0);
  }
  while (candies > 0) {
    current_num++;
    peoples[curren_people] += current_num < candies ? current_num : candies;
    candies -= current_num;
    curren_people++;
    if (curren_people >= num_people) {
      curren_people = 0;
    }
  }
  return peoples;
};

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
console.log(distributeCandies(600, 40));