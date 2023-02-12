// In this problem, we are going to be implementing our own enqueue, dequeue,
// and size methods for the queue constructor we are creating,
// so we should be able to create new instances of the Queue.

// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// IMPLMENT A QUEUE USING AN ARRAY
// this does not pass all tests on CodeWars - but it is one of their "solutions" what?
// class Queue {
//     constructor() {
//       this.list = [];
//     }

//     size() {
//       return this.list.length;
//     }

//     enqueue(item) {
//       this.list.push(item);
//     }

//     dequeue() {
//       this.list.shift();
//     }
//   }

// IMPLEMENTING A QUEUE WITH AN OBJECT
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
