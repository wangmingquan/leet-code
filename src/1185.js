/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

var dayOfTheWeek = function(day, month, year) {
  let dayDict = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dateStr = `${year}/${month}/${day} 00:00:00`;
  let date = new Date(dateStr);
  let _day = date.getDay();
  return dayDict[_day];
};

// test case
console.log(dayOfTheWeek(31, 8, 2019)); // Saturday
console.log(dayOfTheWeek(18, 7, 1999)); // Sunday
console.log(dayOfTheWeek(15, 8, 1993)); // Sunday
