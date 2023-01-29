//Write a function that builds a pyramid in the console
//The pyramid should have the height of n - a number passed to the function

// Example - If you pass the number 8
// The pyramid should be 8 levels high like so:
//#
//##
//###
//####
//#####
//######
//#######
//########

function mario(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("#");
    }
  }
  //   console.log("\n");
}

console.log(mario(8));
