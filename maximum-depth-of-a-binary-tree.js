// 104. Maximum Depth of Binary Tree

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Recursive DFS solution
// function maxDepth(root) {
//     if (!root) return 0;
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// }

// BFS solution
function maxDepth(root) {
    if (!root) return 0; // if tree is empty, return a depth of 0

    let level = 0; // counter for the tree depth
    let queue = [root]; // initialize the queue with the root node

    while (queue.length > 0) { // keep processing nodes until the queue is empty
        let levelSize = queue.length; // count the number of nodes at the current level
        for (let i = 0; i < levelSize; i++) { // process all nodes at the current level
            let node = queue.shift(); // dequeue the front node
            if (node.left) queue.push(node.left); // if left child, enqueue it for processing in the next level
            if (node.right) queue.push(node.right); // same for right child
        }
        level++; // increment the depth counter after processing current level
    }
    return level;
}