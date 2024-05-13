// Given a string, turn each character into its ASCII character code 
// and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667 
// total2 = 656661

// Then return the difference between the sum of the digits in total1 and total2:
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// EXAMPLES
// assert.strictEqual(calc('abcdef'), 6);
// assert.strictEqual(calc('ifkhchlhfd'), 6);

// "abcdef"
//  ^

// "919899" // split
// ["91", "98", "99"] // map(Number)
// [91, 98, 99]

function calc(x){
  let total1 = "";
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }
  const total2 = total1.replace(/7/g, "1");
  return sumStrNums(total1) - sumStrNums(total2);
}

function sumStrNums(str) {
    return str.split("").map(Number).reduce((a,c) => a + c, 0);
}

console.log(calc('abcdef'), 6)
console.log(calc('ifkhchlhfd'), 6)