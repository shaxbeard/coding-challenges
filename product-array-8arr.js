// Given an array/list [] of integers , construct a product array Of same size 
// Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// EXAMPLE
// productArray ({1,5,2}) ==> return {10,2,5} Explanation:
// The first element 10 is the product of all array's elements except the first element 1
// The second element 2 is the product of all array's elements except the second element 5
// The Third element 5 is the product of all array's elements except the Third element 2.

// METHOD 1 - DEMO ONLY - YOU NEED NESTED FOR() LOOPS TO TRACK MULTIPLE ITERATIONS
function productArray(numbers){
  const multiplyArray = [];
  for (let i = 0; i < numbers.length; i++) {
    let multiply = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      }
      multiply *= numbers[j];
    }
    multiplyArray.push(multiply);
  }
 return multiplyArray;
}

// METHOD 2 - REMOVE THE NUMBER FROM EACH ITERATION IN A SNEAKY WAY
// function productArray(numbers){
//   return numbers.map(num => numbers.reduce((a,b) => a * b) [...])
// }
// OR - CLEARER BUT MORE VERBOSE
// function productArray(numbers)
// {
//   var sum = numbers.reduce((x, y) => x * y);
//   return numbers.map(num => [...]);
// }

console.log(productArray([1,5,2]), [10,2,5])