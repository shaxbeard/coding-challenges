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

// temp = -> null
// Null <- 1 <- 2 <- 3 -> null
//                   ^                    # prev pointer
//                         ^              # curr pointer
// Step 1 - Save the pointer to curr.next to temp var
// Step 2 - Change the pointer to curr.next to prev
// Step 3 - Increment both pointers
// ...
// When curr reaches NULL, all the pointers have been changed
// AND we can return prev as the new "head"

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


// Method #2 - Recursive solution
// DEMO
// 1 -> 2 -> 3 -> 4 -> null

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
    if (head == null || head.next == null) return head

    let newHead = reverseList(head.next) // Pass in each next pointer
    // Reversiing the current node's pointer
    head.next.next = head // Set the next node's next pointer to the current node (head)
    head.next = null // Remove the pointer from the current node to the next node
    return newHead // return the new head of the reversed list
}


