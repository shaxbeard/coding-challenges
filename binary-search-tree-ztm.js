class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

// DEMO for BFS
//       9
//   4       20
// 1   6   15  170

// Initialization
// [],  list
// [9],  queue

// First iteration
// [9],  list
// [4,20],  queue
// currentNode = 9

// Second iteration
// [9,4],  list
// [20,1,6],  queue
// currentNode = 4

// Third iteration
// [9,4,20],  list
// [1,6,15,170],  queue
// currentNode = 20

// Fourth iteration
// [9,4,20,1],  list
// [6,15,170],  queue
// currentNode = 1

// Fifth iteration
// [9,4,20,1,6],  list
// [15,170],  queue
// currentNode = 6

// Sixth iteration
// [9,4,20,1,6,15],  list
// [170],  queue
// currentNode = 15

// Seventh iteration
// [9,4,20,1,6,15,170],  list
// [],  queue
// currentNode = 170


class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    //left
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return list;
    }
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.breadthFirstSearch());
// console.log(JSON.stringify(traverse(tree.root)))
//       9
//   4       20
// 1   6   15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}




