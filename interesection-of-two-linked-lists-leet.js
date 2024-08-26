// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, 
// return the node at which the two lists intersect. 
// If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:
// Start i and j at the heads of each list and increment them until they both align on c1

// A.        a1 -> a2 ->
                    
//                         c1 -> c2 -> c2 -> null
//                          i 
//                          j                       
// B.  b1 -> b2 -> b3 ->
                           

// Method #1 - Neetcode solution - traverse 2 pointers and alternate them on each list
// I understand HOW this works but not WHY it works
function getIntersectionNode(headA, headB) {
    let l1 = headA
    let l2 = headB

    while (l1 !== l2) { //either the pointers converge on the intersect node or they both reach null - but why?
        l1 ? l1 = l1.next : l1 = headB // When we hit the end of l1, jump to the head of l2
        l2 ? l2 = l2.next : l2 = headA // Likewise for l2
    }
    return l1;
}