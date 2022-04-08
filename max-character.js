// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

function maxCharacter(str) {
  //char map
  const map = {};
  for (char of str) {
    !map[char] ? (map[char] = 1) : map[char]++;
  }
}

console.log(maxCharacter("Hello World!"), "l");
console.log(maxCharacter("abracadabra"), "a");
