const arr = [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26];

function evenNumbers(array, number) {
  return array.filter((x) => x % 2 === 0).slice(-number);
}

console.log(evenNumbers(arr, 2));
