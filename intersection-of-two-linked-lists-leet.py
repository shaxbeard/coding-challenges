# 160. Intersection of Two Linked Lists
# Given the heads of two singly linked-lists headA and headB, 
# return the node at which the two lists intersect. 
# If the two linked lists have no intersection at all, return null.

# For example, the following two linked lists begin to intersect at node c1:




class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        l1, l2 = headA, headB
        while l1 != l2: # either the lists intersect or they both reach null
            l1 = l1.next if l1 else headB # When we hit the end of l1, jump to the head of l2
            l2 = l2.next if l2 else headA # likewise with l2
        return l1
    

