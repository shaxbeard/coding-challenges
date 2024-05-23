// Write a function insertDash(num)  that will insert dashes ('-') 
// between each two odd digits in num. 

// For example: if num is 454793 the output should be 4547-9-3. 
// Note that the number will always be non-negative (>= 0).

// METHOD 1 - DEMO ONLY - MY ANSWER
// # NOTE - YOU CANNOT REFACTOR THE MOD BECAUSE THE CODE IS SLIGHTLY DIFFERENT IN THE TWO SPOTS
// function insertDash(num) {
//   const numStr = String(num);
//   let result = '';
 
//   for (let i = 0; i < numStr.length; i++){
//     if (numStr[i] % 2 === 1 && numStr[i + 1] % 2 === 1){ // # SHORTER TO USE > 0
//       result += `${numStr[i]}-`
//     } else {
//       result += numStr[i];
//     }
//   }
//   return result;
// }

// METHOD 2 - USING MAP VERBOSE SYNTAX (AND MUTATING INPUT DATA)
// function insertDash(num) {
//     num = num.toString().split('');
//     num = num.map((digit, i, arr) => {
//       if (digit % 2 > 0 && arr[i + 1] % 2 > 0) {
//         return digit + '-';
//       }
//       return digit;
//     });
//     return num.join('');
// }

// VARIATION USING MAP WITH SHORTER SYNTAX (NO MUTATING DATA)
function insertDash(num) {
    const numArr = num.toString().split('');
    return numArr.map((num,i,arr) => num % 2 > 0 && arr[i+1] % 2 > 0 ? num + '-' : num).join('');
}


console.log(insertDash(454793), "4547-9-3");