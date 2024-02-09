// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(y) {
  // All years divided by 400 === true
  if (y % 400 == 0) return true;
  // All years divided by 100 (but not 400) === false
  if (y % 100 == 0) return false;
  // All years divided by 4 (but not 100) === false
  if (y % 4 == 0) return true;
  // All other years === false
  return false;
}

console.log(isLeapYear(1972), true);
console.log(isLeapYear(2100), false); // divisible by 4 but also divisble by 100, not by 400
console.log(isLeapYear(2000), true); // divisible by 4 but also divisible by 100, but also divisible by 400
console.log(isLeapYear(2023), false);
