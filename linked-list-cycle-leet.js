// Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again
// by continuously following the next pointer. 

// THIS LINE IS A DISTRACTOR. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:
// 3 -> 2 -> 0 -> 4 -> (this points back to the 2, not to null)

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


// DEMO
// 1 --> 2 --> 3 --> 4 --> (points back to the 2)
// s
// f

// Iteration #1
// 1 --> 2 --> 3 --> 4 --> (points back to the 2)
//       s
//             f

// Iteration #2
// 1 --> 2 --> 3 --> 4 --> (points back to the 2)
//             s
//       f                # from the 4 back to the 2

// Iteration #3
// 1 --> 2 --> 3 --> 4 --> (points back to the 2)
//                   s     # s has "caught up" to f
//                   f     

function hasCycle(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {  // While neither fast nor fast.next === null
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
}