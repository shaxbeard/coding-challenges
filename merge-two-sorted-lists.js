// Merge Two Sorted Lists - Leetcode #21

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


// DEMO
// 1 -> 2 -> 4   # L1
//             ^
// 1 -> 3 -> 4 -> 5  #   -- Add a 5 here for demonstration
//           ^

// dummy -> 1 -> 1 -> 2 -> 3 -> 4 ->
// 1 -> 1 -> 2 -> 3 -> 4 ->  # return this part without dummy node



class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(); // create dummy node as the starting point of the merged list
    let tail = dummy; // tail will always point to the last node in the merged list

    while (l1 && l2) { // while BOTH lists have nodes remaining
        if (l1.val < l2.val) {
            tail.next = l1; // If l1's node is smaller, add it to the merged list
            l1 = l1.next; // move l1 to the next node
        } else {
            tail.next = l2; // If l2's node is smaller or equal, add it to the merged list
            l2 = l2.next; // move l2 to the next node
        }
        tail = tail.next; // move the tail to the newly added node
    }
    // Add any remaining nodes to the merged list (we don't know which one has remaining nodes)
    if (l1) {
        tail.next = l1;
    } else if (l2) {
        tail.next = l2;
    }

    return dummy.next; // Skip the dummy node and return the rest of the merged list
}
