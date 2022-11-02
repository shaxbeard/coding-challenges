// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//PREP+M
//Paramters. integers (no decimals), always 10 integers, never integers as string
//Return. a string of numbers, parens around first 3 nums, space after area code, hyphen after first 3 remaining nums
//Example. [4,1,6,5,5,1,7,2,5,1] -> ["(416) 551-7251"]
//Pseudocode - loop over items, add to string
//insert open-paren before index 0
//insert close-paren AND SPACE after index 3
//insert hyphen after index 5

//Methods - LOOK AT THE STRING METHODS !!

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers) {
//   let phone = "";
//   numbers.forEach((item, index) => {
//     if (index === 0) phone += "(";
//     if (index === 3) phone += ") ";
//     if (index === 6) phone += "-";
//     phone += item;
//   });
//   return phone;
// }

function createPhoneNumber(numbers) {
  let phone = "(xxx) xxx-xxxx";
  numbers.forEach(number => (phone = phone.replace("x", number)));
  return phone;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([4, 1, 6, 5, 5, 1, 7, 2, 5, 1]));
