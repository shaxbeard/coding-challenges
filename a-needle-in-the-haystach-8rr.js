// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk 
// but containing one "needle" After your function finds the needle it 
// should return a message (as a string) that says: 
// "found the needle at position " plus the index it found the needle, so:

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// METHOD 1 - DEMO ONLY - MANUAL TRANSMISSION
// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === "needle") {
//       return `found the needle at position ${i}`;
//     }
//   }
// } 

// METHOD 2 - USING AN ARRAY METHOD
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf()}`;
}
