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

// function buildPyramid(height) {
//   for (let row = 1; row <= height; row++) {
//     let line = "";
//     for (let spaces = 1; spaces <= height - row; spaces++) {
//       line += " ";
//     }
//     for (let col = 1; col <= row; col++) {
//       line += "#";
//     }
//     console.log(line);
//   }
// }
// buildPyramid(8);

function buildPyramidRecursively(height, row = 1, line = "") {
  if (row > height) {
    return;
  }
  if (line.length < height - row) {
    line = " " + line;
  } else {
    line += "#";
    if (line.length === height) {
      console.log(line);
      line = "";
      row++;
    }
  }
  buildPyramidRecursively(height, row, line);
}
buildPyramidRecursively(8);
