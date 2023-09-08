/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let publicList = [];
  for (let i = 0; i < list1.length; i++) {
    const index = list2.indexOf(list1[i]);
    if (index !== -1) {
      publicList.push({
        name: list1[i],
        value: i + index
      });
    }
  }

  if (publicList.length === 0) {
    return [];
  }

  publicList.sort((a, b) => {
    return a.value - b.value;
  });
  const minValue = publicList[0].value;
  return publicList.filter(item => item.value === minValue).map(item => item.name);
};

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
console.log(findRestaurant(list1, list2)); // ['Shogun']

// const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
//   list2 = ["KFC", "Shogun", "Burger King"];
// console.log(findRestaurant(list1, list2)); // ['Shogun']


// const list1 = ["happy", "sad", "good"],
//   list2 = ["sad", "happy", "good"];
// console.log(findRestaurant(list1, list2)); // ["sad","happy"]
