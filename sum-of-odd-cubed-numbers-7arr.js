// Find the sum of the odd numbers within an array, 
// after cubing the initial integers. The function should return undefined 
// if any of the values aren't numbers.

// Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
// Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
// Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);

// METHOD #1 - FOR() LOOP, and test BOTH CONDITIONS on each iteration
// function cubeOdd(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++){
//     var cubed = (Math.pow(arr[i], 3));
//     if (isNaN(cubed)) return undefined;
//     if (cubed % 2 != 0 ) sum += cubed;
//   }
//   return sum;
// }

// METHOD 2 - USING 2 ARRAY METHODS - HENCE, LOOPING THROUGH THE ARRAY TWICE
let cubeOdd = arr => {
//   var isNumeric = arr.every(num => !isNaN(num))
  var isNumeric = arr.every(num => typeof num === "number")
  return isNumeric ? arr.filter(n => n % 2).reduce((a,n)=> a +(n*n*n),0) : undefined
}

console.log(cubeOdd([1, 2, 3, 4]), 28)
console.log(cubeOdd([-3,-2,2,3]), 0)
console.log(cubeOdd(["a",12,9,"z",42]), undefined)