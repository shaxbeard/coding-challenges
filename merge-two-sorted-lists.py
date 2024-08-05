

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(l1, l2):
    dummy = ListNode() # Will this work with the class above?
    tail = dummy

    while l1 and l2:
        if l1.val < l2.val:
            tail.next = l1 # Then we insert the node as the tail
            l1 = l1.next # And update the l1 pointer
        else: 
            tail.next = l2
            l2 = l2.next 
        tail = tail.next # Update this for either condition

    # Handle any remaining items in the list that did not reach the end
    if l1:
        tail.next = l1
    elif l2:
        tail.next = l2
    
    return dummy.next