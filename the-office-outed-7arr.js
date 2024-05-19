// "The Office I - Outed-7arr." [Abridged]  Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// EXAMPLES
//   assert.strictEqual(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
//     assert.strictEqual(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
//     assert.strictEqual(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');

// METHOD 1 - LOOP OVER THE OBJECT AND TRACK BOTH THE SUM AND THE COUNT
// function outed(meet, boss){
//   var sum=0;
//   var count=0;
//   for (let key in meet)
//     if (key != boss)
//     {
//       sum +=meet[key];
//       count++;
//     }  
//     else
//     {
//       sum +=meet[key] * 2 ;
//       count++;
//     }
//   return sum / count <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
// }
// METHOD 2 - USING ARRAY METHODS
function outed(meet, boss) {
  let names = Object.keys(meet)
  console.log(names);
  let score = names.reduce((a,c) => a + meet[c], 0) + meet[boss]
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
// console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!')