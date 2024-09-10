// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, 
// and return the reversed list

// Example 1
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// DEMO
// Input:  1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

// Start by looking at a smaller portion
// 1 -> 2 -> 3 -> 
//   <-   X   # Delete right arrow, Add left arrow

// temp = null
// Null <- 1 <- 2 <- 3 -> null
//                   ^                                   # prev pointer
//              ^                        # curr pointer

// DOES IT MAKE MORE SENSE TO STACK THE NUM AND THE POINTER LIKE THIS?
// temp =  NULL
//         -> 
// Null  [1]     1   2   3    null
//      [<-]    <-  <-  <-                       
//                      ^                    # prev pointer
//                ^                          # curr pointer
// Step 1 - Save the pointer to curr.next to temp var
// Step 2 - Change the pointer to curr.next to prev
// Step 3 - Increment both pointers
// ...
// When curr reaches NULL, all the pointers have been changed
// AND we can return prev as the new "head"



// FOR ME, THIS IS THE CLEAREST WAY TO VISUALIZE THE LINKED LIST IN GENERAL
// HEAD                    TAIL
// [10  ]
// [NODE]      [5   ]
// [#946]  --> [NODE]      [16  ]
//             [#742]  --> [NODE]  
//                         [#242] --> null


// FOR THIS REVERSAL SOLUTION, WE NEED A NULL AT THE START TOO
//          HEAD                    TAIL
//          [10  ]
//          [NODE]      [5   ]
// null  <- [#946]  <-  [NODE]      [16  ]          
//                      [#742]  <-  [NODE]                         
//                                  [#242]     null
//                                    p         
//                                               c           
//                                               t
// The arrows are not in the best position when I use this diagram for the reversal, but it's okay




// Method 1 - Iterative - O(n) time, O(1) memory because we are just moving pointers
function reverseList(head) {
    let prev = null; // Initialize prev to null as the new tail of the list will point to null
    let curr = head; // Start with curr at the head of the list
    
    while (curr) { // Continue until curr becomes null, which means the end of the list is reached
        const temp = curr.next; // Save the next node of the current node in a temporary variable
        curr.next = prev; // Reverse the current node's next pointer to point to the previous node
        prev = curr; // Move the prev pointer to the current node
        curr = temp; // Move the curr pointer to the next node (originally saved in temp)
    }
    return prev; // Return the new head of the reversed list, which is prev
}

// Iterative using THREE pointers
// I find a, b, c confusing as names
// But using prev, curr, and next is confusing because "next" is also the pointer
// What about before, current, and after?
// Or prev, curr, after?
// A person could start with more descriptive variable names and then switch to a, b, c later??
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (b) {
        let after  = b.next; // save the next node in c instead of temp
        curr.next = a; //reverse the "current" node's next pointer
        prev = curr; // move the "prev" pointer to the current node
        curr = after; // move the "curr" pointer to next node at c instead of temp
    }
    return a;
}

// function reverseList(head) {
//     let a = null;
//     let b = head;

//     while (b) {
//         let c = b.next; // save the next node in c instead of temp
//         b.next = a; //reverse the "current" node's next pointer
//         a = b; // move the "prev" pointer to the current node
//         b = c; // move the "curr" pointer to next node at c instead of temp
//     }
//     return a;
// }


// Method #2 - Recursive solution
// DEMO
// 1 -> 2 -> 3 -> 4 -> null

// In a recursive solution, you deal with just ONE PIECE of the problem at a time

// Say that this is the full list you want to reverse
// HEAD                    TAIL
// [1  ]
// [NODE]      [2   ]
// [#946]  --> [NODE]      [3   ]
//             [#742]  --> [NODE]  
//                         [#242] --> null

// In the recursive solution, you can only deal with 2 nodes at a time 
// In the context of each recursive "piece", each pair of nodes is head and head.next
//             HEAD        head.next                 
//             [2   ]
//             [NODE]      [3   ]
//             [#742]  --> [NODE]  
//                         [#242]    null

// So given this restriction, we CAN still change the pointer from 3 to 2
// BUT - we can't point from 2 to 1 in this step (because 1 isn't there!)
// What do we do? We temporarily point 2 to null

//             [2   ]
//             [NODE]      [3   ]
//   null  <-- [#742]  <-- [NODE]  
//                         [#242]    

// In the next step, we POP OUT OF THE RECURSIVE CHUNK (frame?)
// Now the 2 CAN point to the 1  
// AND we can point the 1 to null 

// HEAD                              TAIL
//          [1  ]
//          [NODE]      [2   ]
// null <-- [#946]  <-- [NODE]      [3   ]
//                      [#742]  <-- [NODE]  
//                                  [#242] 



// First call, head = 1, and we call reverseList(2)
// Second call, head = 2, and we call reverseList(3)
// Third call, head = 3, and we call reverseList(4)
// Fourth call, head = 4, and since head.next = null,
//     we hit the base case and return 4

// THE RECURSION STARTS TO UNWIND
// In the third call: head = 3, newHead = 4
// we reverse the pointer: 3.next.next (which is 4.next) is set to 3
// and we set 3.next = null
// so we have 4 -> 3 -> null
// ...
// In the second call: head = 2, newHead is STILL 4 !!
// we reverse the pointer: 2.next.next (which is 3.next) is set to 2
// and we set 2.next = null
// so we have 4 -> 3 -> 2 -> null
// ...
// In the first call: head = 1, newHead is STILL 4
// we reverse the pointer: 1.next.next (which is 2.next) is set to 1
// and we set 1.next = null
// so we have 4 -> 3 -> 2 -> 1 -> null
// AND
// we return newHead, which is the head of the fully reversed list



function reverseList(head) {
    // Base case - this means the list is already reversed so return the head as is
    if (head == null || head.next == null) return head // head == null is just for an empty list - needed?

    let newHead = reverseList(head.next)
    // In recursion, just handle two nodes at a time: 1) head 2) head.next
    head.next.next = head // Set the next node's next pointer to the current node (head)
    head.next = null // temporarily point the current node to null
    return newHead // return the new head of the reversed list
}


