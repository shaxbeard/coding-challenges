// You will be given an array of numbers.
// You have to sort the odd numbers in ascending order
// while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray = array => {
  const odds = array.filter(item => item % 2 !== 0).sort((a, b) => b - a);
  return array.map(item => (item % 2 === 0 ? item : odds.pop()));
};

console.log(sortArray([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log(
  sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
);

// So item % 2 is the same as item % 2 !== 0
// Makes sense I guess
//If item == 0 then it is FALSY
//If item !== 0 then it is TRUTHY, hence just "item % 2"

// So what is the equivalent for item % 2 == 0
// Can I use !item % 2 ??  # NO
