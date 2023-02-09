// Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.
// An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out.

// Waiting Lines
// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.

// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.
// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.
// As long as the tests pass, go for it!

// IMPLEMENT A STACK WITHOUT A CLASS
// const stack = [];

// //push
// stack.push("dog");
// stack.push("cat");
// stack.push("bear");

// //Last in first out
// stack.pop();

// //peek
// console.log(stack[stack.length - 1]);

// IMPLEMENT A STACK WITH A CLASS
// class Stack {
//   constructor() {
//     this.storage = {};
//     this.size = 0;
//   }
//   push(element) {
//     this.size++;
//     this.storage[this.size] = element;
//   }
//   pop() {
//     let removed = this.storage[this.size];
//     delete this.storage[this.size];
//     this.size--;
//     return removed;
//   }
//   peek() {
//     return this.storage[this.size];
//   }
// }

// const stack = new Stack();

// stack.push("dog");
// stack.push("cat");
// stack.push("bear");

// console.log(stack.pop());
// console.log(stack.peek());

//IMPLEMENT A QUEUE WITHOUT A CLASS
// const queue = [];

// //enqueue
// queue.push("dog");
// queue.push("cat");
// queue.push("bear");

// //dequeue
// queue.shift();

// //peek
// console.log(queue[0]);

//IMPLEMENT A QUEUE WITH AN ARRAY INSIDE A CLASS
// class Queue {
//   constructor() {
//     this.list = [];
//   }

//   size() {
//     return this.list.length;
//   }

//   enqueue(item) {
//     this.list.push(item);
//   }

//   dequeue() {
//     this.list.shift();
//   }
// }

// const queue = new Queue();
// queue.enqueue("giraffe");
// console.log(queue.size());

//IMPLEMENT A QUEUE WITH AN OBJECT INSIDE A CLASS
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
  peek() {
    return this.storage;
  }
}

const queue = new Queue();

queue.enqueue("seahorse");
queue.enqueue("dolphin");
queue.enqueue("narwhal");
queue.dequeue();
queue.dequeue();
