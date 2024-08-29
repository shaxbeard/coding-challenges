// 104. Maximum Depth of Binary Tree

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

//  The full tree for Example 1
//         3
//        / \
//       9   20
//          /  \
//        15    7

// The first recursive "chunk" - the piece we "zoom in" on
//         3
//        / \
//       9   20
//  1 + max(l, r) = 

// The second recursive chunk (this is the root.left part)
//        9
//       / \
//    null  null
// From this "perspective", the max depth of this branch is 1

// The third recursive chunk (the root.right part)
//        20
//       /  \
//    15      7
// From this zoomed-in perspective, the max depth is 2 

// Okay, so when the recursion "unwinds" ...
//          3(1)  add 1 for the root node
//        /   \
//      9 (1)   20 (2)  add Math.max(1, 2) = 2
//    /  \      / \
// null  null 15(1) 7(1)
//           /       \
//        null(0)      null(0)  add ZERO at this point



// Recursive DFS solution
function maxDepth(root) {
    // base case
    if (!root) return 0; // return a zero count and stop at branch end
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) // count the depth of left and right branches, but return the max val only
}

// BFS solution
// function maxDepth(root) {
//     if (!root) return 0; // if tree is empty, return a depth of 0

//     let level = 0; // counter for the tree depth
//     let queue = [root]; // initialize the queue with the root node

//     while (queue.length > 0) { // keep processing nodes until the queue is empty
//         let levelSize = queue.length; // count the number of nodes at the current level
//         for (let i = 0; i < levelSize; i++) { // process all nodes at the current level
//             let node = queue.shift(); // dequeue the front node
//             if (node.left) queue.push(node.left); // if left child, enqueue it for processing in the next level
//             if (node.right) queue.push(node.right); // same for right child
//         }
//         level++; // increment the depth counter after processing current level
//     }
//     return level;
// }