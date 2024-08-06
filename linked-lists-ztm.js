// How would you render this linked list structure with a simple JS object?
// 10 -> 5 -> 16

// Using a simple object with nodes as nested items
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// CREATE A CLASS THAT GENERATES OBJECTS LIKE ABOVE
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
    this.tail = this.head;
    this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode; // Make a pointer from the old tail to the new node
        this.tail = newNode; // create the new node itself at the tail
        this.length++
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head // Make a pointer from the new node to the old head
        this.head = newNode; // Create the new node itself at the head
        this.length++
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
    insert(index, value) {
        //check params
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index-1);
    }
    // remove()  // COME BACK TO THIS LATER

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head; // What?
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null; // What?
        this.head = first;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)

myLinkedList.printList();
myLinkedList.reverse()
myLinkedList.printList()
// console.log(myLinkedList)


