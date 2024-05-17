// Complete the keysAndValues function so that it takes in an object 
// and returns the keys and values as separate arrays.

// Example:
// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// METHOD 1 - USING A LOOP THAT LOOPS OVER OBJECTS
function keysAndValues(data){
  var keys = [],
      vals = [];
  for (key in data) {
    if(data.hasOwnProperty(key)){
      keys.push(key);
      vals.push(data[key]);
    }
  }
  return [keys, vals];
}
// METHOD 2 - USING ARRAY METHODS FOR THIS EXACT PURPOSE
// function keysAndValues(data){
//     return [Object.keys(data), Object.values(data)];
// }

console.log(keysAndValues({d: 4, e: 5, f: 6, g: 7}))