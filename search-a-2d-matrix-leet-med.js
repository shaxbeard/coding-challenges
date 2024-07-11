// Leetcode 74. Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.


// Example 1:
// Input: matrix = 
// [
//     [1,3,5,7],
//     [10,11,16,20],
//     [23,30,34,60]
// ], 
// target = 3
// Output: true


// Demo
// [
//     [1, 3, 5, 7],  // <
//     [10,11,16,20], // mid
//     [23,30,34,60]  // <
// ],
//      ^
// target - 3
// is 3 > 20 -> False
// is 3 < 10 -> True

function searchMatrix(matrix, target) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    
    // Step 1 - Do binary search of all rows
    let top = 0, bot = ROWS - 1;
    while (top <= bot) {
        let row = Math.floor((top + bot) / 2);
        if (target > matrix[row][COLS - 1]) { // Is target > the num at the END of the row?
            top = row + 1;
        } else if (target < matrix[row][0]) { // Is target < the num at the START of the row?
            bot = row - 1;
        } else { // In this case, target is IN the middle row itself
            break;
        }
    }
    
    // Step 2 - Do binary search on just the one row
    if (!(top <= bot)) { // This means we did not find it?
        return false;
    }
    let row = Math.floor((top + bot) / 2); // Is "row" above scoped to the while loop?
    let l = 0, r = COLS - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (target > matrix[row][m]) { // We only search the one row that we identified above
            l = m + 1;
        } else if (target < matrix[row][m]) {
            r = m - 1;
        } else {
            return true;
        }
    }
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3), true);
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13), false);



