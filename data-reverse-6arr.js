// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

//Input = an array of integers - any funny business? Empty array, string? No
// the length of the array is always a multiple of 8
//Output - each byte (chunk of 8 nums) needs to be returned in the reverse order

//  0 1 2 3 4 5 6 7
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// [1,1,1,1,1,1,1,1] = byte 1
// [0,0,0,0,0,0,0,0] = byte 2

// Method #1 - Manual transmission with a for loop
// function dataReverse(arr) {
//   // Break the array into subarrays, each with a length of 8
//   const bytes = [];
//   const byte = [];

//   //Loop over the input array
//   for (let i = 0; i < arr.length; i++) {
//     //When we reach each multiple of 8, push the subarray to a new array
//     if (i % 7 === 0) {
//       bytes.push(byte);
//       break;
//     }
//     //Until we reach 8 nums, keep pushing to the subarray
//     byte.push(arr[i]);
//     console.log("What the eff?");
//   }
//   console.log(bytes);
//   // Reverse the subarray
//   // Return the reversed subarray
// }

// Method #2 - Using slice() and spread operator - chunking by counting backwards in for() loop
function dataReverse(data) {
  const reversedData = [];

  // Iterate over the array in chunks of 8 bits
  for (let i = data.length - 8; i >= 0; i -= 8) {
    // Extract the current 8-bit segment
    const segment = data.slice(i, i + 8);

    // Add the segment to the reversedData array
    reversedData.push(...segment);
  }

  return reversedData;
}

// Method #3 - Using slice() and spread, but reversing the order using shift()
// Bad time complexity because the new array must be reindexed on each iteration when using unshift()
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4,
    4, 4, 4, 4, 4, 4, 4,
  ]),
  [
    4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 1, 1, 1,
  ]
);
