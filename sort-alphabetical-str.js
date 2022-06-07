// Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// ['one', 'two', 'three' ]), ["one", "three", "two"])

const arr = ["one", "two", "three", "four"];
const numbers = [4, 2, 5, 1, 3];

sortmeNum = function (numbers) {
  return numbers.sort((a, b) => a - b);
};
function sortmeStr(strings) {
  return strings.sort((a, b) => a.localeCompare(b));
}
function sortmeStr(strings) {
  // return strings.sort();
  return strings.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}

console.log(sortmeStr(arr));
console.log(sortmeNum(numbers));
