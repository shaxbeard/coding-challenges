// Invert Binary Tree - Leetcode #226

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
//       4                4
//    2     7   =>     7     2
//  1  3   6 9        9 6   3 1

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]


// DEMO
//       4                
//    2     7       
//  1  3   6 9       

// The problem repeats a swap of the right and left children at every node
// Top level
//  4        4
// 2 7  =>  7 2

// Next level down, left branch
//  2   =>  2
// 1 3     3 1

// Same level, right branch
//  7   =>  7
// 6 9     9 6



function invertTree(root) {
    // base case
    if (!root) return root;

    // swap the children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recursively invert the left and right sides of the tree
    invertTree(root.left);
    invertTree(root.right);
    return root;
}