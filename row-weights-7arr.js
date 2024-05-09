// "Row Weights-8arr." Scenario: Several people are standing in a row divided into two teams. 
// The first person goes into team 1, the second goes into team 2, 
// the third goes into team 1, and so on.

// Task: Given an array of positive integers (the weights of the people), 
// return a new array/tuple of two integers, 
// where the first one is the total weight of team 1, 
// and the second one is the total weight of team 2.

// Input >> Output Examples
// rowWeights([13, 27, 49]) ==> return (62, 27)
// rowWeights([50, 60, 70, 80]) ==> return (120, 140)

// METHOD 1 - MANUAL - BUT NOTICE THAT YOU CAN USE AN ARRAY  AS AN ACCUMULATOR FOR MULTIPLE VALUES
// function rowWeights(array){
//   var arr = [0, 0];
//   for (var i = 0; i < array.length; i++) {
//     i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
//   }
//   return arr; 
// } 

// METHOD 2 - USING FILTER AND THEN REDUCE - CLEVER COMBO
// function rowWeights(array){
//     let t1 = array.filter((x, i) => i % 2 == 0).reduce((a,c) => a+c,0);
//     let t2 = array.filter((x, i) => i % 2 != 0).reduce((a,c) => a+c,0);
//     return [t1, t2]
// }

function rowWeights(array) {
    return array.reduce((a, c, i) => {
      a[i % 2] += c;
      return a;
    }, [0, 0]);
  }

function rowWeights(array) {
    return array.reduce((a,c,i) => (a[i % 2] += c, a), [0,0]);
}




console.log(rowWeights([13, 27, 49]), [62, 27])
console.log(rowWeights([50, 60, 70, 80]), [120, 140])