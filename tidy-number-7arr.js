// A Tidy number is a number whose digits are in non-decreasing order. Given a number, Find if it is Tidy or not .

// EXAMPLES
//   Test.assertEquals(tidyNumber(12),true);
//   Test.assertEquals(tidyNumber(102),false);
//   Test.assertEquals(tidyNumber(2335),true); # 2 nums the same

// 0123  # Indexes
//"2335"  # length = 4
       //^

// METHOD 1 - CONVERT NUM TO STRING AND LOOP OVER EACH NUMBER/CHARACTER
// const tidyNumber = n => {
//   let s = n.toString();
//   for (let i = 0; i < s.length-1; i++) {
//     if (s[i] > s[i + 1]) return false;
//   }
//   return true;
// }

//2335
//["2", "3", "3", "5"] // split AND convert to string
//["2", "3", "3", "5"] // sort the array of strings
//"2335" // join the array into a string

//2335
//"2335"  // convert to string
//["2","3","3","5"]  // split
//[2, 3, 3, 5]

// METHOD 2 - USING SORT()
function tidyNumber(n){
    return String(n) === String(n).split("").sort().join('');
    // return String(n) === [...n + ''].sort().join(''); // Weird shorthand for stringify and split
}

//2335
//["2","3","3","5"]  # convert to string then split
//[2, 3, 3, 5]  # Convert each item from str to num
//       ^

// METHOD 3 - USING EVERY()
// function tidyNumber(n){
//   let arr = [...n.toString()].map(Number);
//   return arr.every((el, i, arr) => !i || el >= arr[i - 1]);
// }

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(2335), true);