/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */

var distanceBetweenBusStops = function(distance, start, destination) {
  if (start > destination) {
    let temp = destination;
    destination = start;
    start = temp;
  }
  let totalDisTance = 0;
  let distanceA = 0;
  let distanceB = 0;
  for (let i = 0, l = distance.length; i < l; i++) {
    totalDisTance += distance[i];
    if (i >= start && i < destination) {
      distanceA += distance[i];
    }
  }
  distanceB = totalDisTance - distanceA;
  return distanceA < distanceB ? distanceA : distanceB;
};

// test case
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)); // 1
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)); // 3
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)); // 4
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2)); // 17

