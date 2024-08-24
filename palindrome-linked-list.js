// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// DEMO

// Start state
// s
// 1 -> 2 -> 3 -> 3 -> 2 -> 1 
// f

// End state
//                h
// 1 -> 2 -> 3 -> 3 <- 2 <- 1  // Note - 2nd half arrows reversed
//                r = null



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


