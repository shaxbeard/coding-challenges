//Write a function that builds a left-aligned pyramid in the console. Then alter the function to right-align the pyramid.

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

// Example 2 - Right-alinged pyramid
//        #
//       ##
//      ###
//     ####
//    #####
//   ######
//  #######
// ########

// LEFT ALINGED PYRAMID - CAN HAVE USER INPUT HEIGHT IN BROWSER
// function buildPyramid(height) {
//   // Make as many rows as the height
//   for (let row = 1; row <= height; row++) {
//     let line = "";
//     // In each row, add as many columns (with the # character) as the number of the current row
//     // So row #1 gets 1 column, row #2 gets 2 columns, etc.
//     for (let col = 1; col <= row; col++) {
//       line += "#";
//     }
//     console.log(line);
//   }
// }

// // const height = parseInt(prompt("Enter pyramid height:"));
// buildPyramid(8);

// RIGHT ALINGED PYRAMID - CAN HAVE USER INPUT HEIGHT IN BROWSER
function buildPyramid(height) {
  debugger;
  for (let row = 1; row <= height; row++) {
    let line = "";
    // Add spaces to align the pyramid to the right
    for (let spaces = 1; spaces <= height - row; spaces++) {
      line += " ";
    }
    // Add '#' characters for the current row
    for (let col = 1; col <= row; col++) {
      line += "#";
    }
    console.log(line);
  }
}

// const height = parseInt(prompt("Enter pyramid height:"));
buildPyramid(8);

// RECURSIVE FUNCTION TO BUILD A PYRAMID - LEFT-ALIGNED
// function buildPyramidRecursively(height, row = 1, line = "") {
//   if (row > height) {
//     return; // Base case: we have built all rows
//   }
//   line += "#";
//   if (line.length === row) {
//     console.log(line); // We have built a complete row
//     line = ""; // Reset line for the next row
//     row++; // Move to the next row
//   }
//   buildPyramidRecursively(height, row, line);
// }

// // const height = parseInt(prompt("Enter pyramid height:"));
// buildPyramidRecursively(8);

// // RECURSIVE FUNCTION TO BUILD A PYRAMID - RIGHT-ALIGNED
// function buildPyramidRecursively(height, row = 1, line = "") {
//   if (row > height) {
//     return; // Base case: we have built all rows
//   }
//   if (line.length < height - row) {
//     line = " " + line; // Add a space to align the pyramid to the right
//   } else {
//     line += "#"; // Add a '#' character to the current line
//     if (line.length === height) {
//       console.log(line); // We have built a complete row
//       line = ""; // Reset line for the next row
//       row++; // Move to the next row
//     }
//   }
//   buildPyramidRecursively(height, row, line);
// }

// // const height = parseInt(prompt("Enter pyramid height:"));
// buildPyramidRecursively(7);
