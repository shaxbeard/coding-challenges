// In this kata you get the start number and the end number of a region
// and should return the count of all numbers except numbers with a 5 in it.

// The start and the end number are both inclusive!

// Examples:
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

//Input - 2 integers, any funny business? no, but the INTs can be negative
//Output is the "count" (total amount - not the sum) of INTEGERS between those input nums - except for numbers with a 5 in it
// What are numbers with a 5 in it? 5, 15, 25, 35, 45, 50, 55, 65 ...
// How do I test if a number has a 5 in it?
// 5 % 5 === 1, 15 % 5 === 1 ..., 50 % 5 === 1
// BUT 20 % 5 === 1, 30 % 5 === 1, and these numbers do not have 5s in them  ## I should be able to account for this
// What if I convert the num to a string and check for the 5 as a character?

// These index values are the item I am testing
// [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// Version #1 - using for() and includes()
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).includes("5")) count++;
  }
  return count;
}

// Version #2 - using RegExp.prototype.test() instead of includes()
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) count++;
  }
  return count;
}

console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);
