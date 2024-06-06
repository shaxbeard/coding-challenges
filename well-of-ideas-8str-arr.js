// For every good kata idea there seem to be quite a few bad ones! 
// In this kata you need to check the provided array (x) for good ideas
//  'good' and bad ideas 'bad'. 
//  If there are one or two good ideas, return 'Publish!', 
//  if there are more than 2 return 'I smell a series!'. 
//  If there are no good ideas, as is often the case, return 'Fail!'.

// EXAMPLES
// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

// METHOD 1 - USING A LOOP TO COUNT
// function well(x){
//   let counter = 0;
//   x.forEach(val => val === "good" ? counter++ : null);
//   return counter > 2 ? "I smell a series!" :
//          counter > 0 ? "Publish!" : "Fail!" 
// }

// METHOD 2 - USING AN ARRAY METHOD 
// function well(x){
//   const counter = x.filter(val => val === "good").length; 
//   return counter > 2 ? "I smell a series!" :
//          counter > 0 ? "Publish!" : "Fail!"
// }

function well(x) {
    const counter = x.reduce((a,c) => c === "good" ? a + 1 : a);
    return counter > 2 ? "I smell a series!" :
         counter > 0 ? "Publish!" : "Fail!" 
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!')
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')