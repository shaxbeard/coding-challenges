

# Method 1 - Iterative - O(n) time, O(1) memory because we are just moving pointers
def reverseList(head):
    prev = None
    curr = head

    while curr: # Keep going until curr pointer hits Null node
        nxt = curr.next # save the next pointer in temp var
        curr.next = prev # reverse the list pointer direction
        prev = curr
        curr = nxt
    return prev









 


