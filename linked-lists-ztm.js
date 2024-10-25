
// What's the best way of making diagrams and demos of linked lists?

// 10 --> 5 --> 16  // this makes the pointers look SEAPARATE from the values


// This diagram is more accurate, but it's a bit unruly
// This makes it look like the arrows point specifically to the values
// AND THIS IS WHAT CONFUSES ME SOMETIMES IN THE ACTUAL CODE


// apples
// 8946  --> grapes
//            8742  --> pears
//                       372  --> null

// Here's the same diagram with nums instead of strings
//       1             
//      4222 ->  2                      
//              824 ->  3                          
//                     372 -> null                  


// In fact, each arrow points to the NEXT NODE more like this
// [apples]
// [8946  ]  --> [grapes]
//               [8742  ] --> [pears]
//                            [372  ] -->  null


// Does this convey the structure even better?
// [apples]
// [NODE  ]      [grapes]
// [8946  ]  --> [ NODE ]      [pears]
//               [8742  ]  --> [NODE ]
//                             [372  ] -->  null


                        

// Now with numbers
// [10  ]
// [NODE]      [5   ]
// [#946]  --> [NODE]      [16  ]
//             [#742]  --> [NODE]
//                         [#372] -->  null
                




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


// DEMO FOR THE APPEND() METHOD
// After having all three nodes 
// [10  ]
// [NODE]      [5   ]
// [#946]  --> [NODE]      [16  ]
//             [#742]  --> [NODE]
//                         [#122] -->  null


// BEFORE we append the 3rd node           
// HEAD        TAIL
// [10  ]
// [NODE]      [5   ]
// [#946]  --> [NODE]     
//             [#742]  --> null
//                         
//     
// The newNode after the contructor           
//[16  ]
//[NODE]
//[#242] --> null

// AFTER we point the arrow from TAIL to the newNode         
// HEAD        TAIL
// [10  ]
// [NODE]      [5   ]
// [#946]  --> [NODE]      [16  ]
//             [#742]  --> [NODE]  
//                         [#242] --> null
//      

// After we reassign the ENTIRE VARIABLE of this.tail to the newNode       
// HEAD                    TAIL
// [10  ]
// [NODE]      [5   ]
// [#946]  --> [NODE]      [16  ]
//             [#742]  --> [NODE]  
//                         [#242] --> null
//   

// 1 - the constructor is called with a value of 16
// So the newNode is created, but it is floating somewhere in memory by itself  
// 2 - Point the arrow from TAIL to the newNode (instead of pointing to null) 
// 3 - Assign the VARIABLE of tail (that lives in the constructor) to the newNode 
//     I totally didn't understand how TAIL was working here

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

// DEMO - THE PREPEND() METHOD
// Now we want to add the number 1 at the BEGINNING of the linked list

// HEAD                    TAIL
// [10  ]      [5   ]
// [8946]  --> [NODE]      [16  ]
//             [8742]  --> [NODE]  
//                         [#242] --> null


// 1 - the constructor is called with a value of 1

// The newNode after the contructor           
// [1  ]
// [NODE]
// [#462] --> null

// 2 - point the arrow from newNode to the HEAD

// NEW       HEAD                   TAIL
// [1   ]
// [NODE]     [10  ]
// [#462] --> [NODE]      [5  ]
//           [#894]  --> [NODE]     [16  ]
//                       [#842] --> [NODE]
//                                  [#242] -- null

// 3. Change the "head" variable so that it equals the new node

// HEAD                             TAIL
//[1   ]
//[NODE]     [10  ]
//[#462] --> [NODE]      [5  ]
//           [#894]  --> [NODE]     [16  ]
//                       [#842] --> [NODE]
//                                  [#242] -- null


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


