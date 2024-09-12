// 234. Palindrome Linked List . 
// The category for this problem is Two Pointers Advanced.

// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true



// DEMO
// We take TWO PASSES through the list with TWO DIFFERENT SETS of pointer.
// FIRST PASS - one slow (1x) and one fast (2x) pointer to find the mid and end nodes
// SECOND PASS - one pointer at the start and end the original list (the end nodes is now the head of the reversed list)

// START WITH ONE SLOW AND ONE FAST POINTER
// Start state
// s
// 1 -> 2 -> 3 -> 3 -> 2 -> 1 
// f

// State after finding the middle node
//                s
// 1 -> 2 -> 3 -> 3 -> 2 -> 1
//                          f

// State after reversing 2nd half arrows
//               
// 1 -> 2 -> 3 -> 3 <- 2 <- 1  


// CHANGE TO A NEW PAIR OF POINTERS !!
// h pointer at original head, r pointer at head of reversed list
// h              
// 1 -> 2 -> 3 -> 3 <- 2 <- 1  
//                          r  // rev = the head of the reversed section (formerly tail of the whole list)

// End state
//                h
// 1 -> 2 -> 3 -> 3 <- 2 <- 1  
//                (r = null)  // because it traverses off the list when there is no arrow to follow





function isPalindrome(head) {
    // Move slow pointer to list mid and fast pointer to end
    let slow = head;
    let fast = head;
    // if fast === null, it has reached the end of a list with even num of nodes
    // if fast.next === null, it has reached the end of a list with an odd num of nodes
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the 2nd half of the list
    let rev = reverse(slow) // Add helper function 

    // rev points to the "head" of the reversed 2nd half (formerly tail of whole list)
    while (rev) { // Should we have while (rev && head)?
        if (head.val !== rev.val) return false;
        head = head.next
        rev = rev.next // arrows point backwards now
    }
    return true; // If loop above finishes, then valid palindrome
}

function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}


