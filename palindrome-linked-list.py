# 234. Palindrome Linked List

# Given the head of a singly linked list, return true if it is a 
# palindrome or false otherwise.

# Example 1:
# Input: head = [1,2,2,1]
# Output: true

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        # Move slow pointer to list mid, move fast pointer to end
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        # Reverse the 2nd half of the list
        rev = self.reverse(slow) # slow pointer is at the middle of list now

        # rev points to the "head" of the reversed second half (formerly the tail of the whole list)
        while rev:
            if head.val != rev.val:
                return False
            head = head.next
            rev = rev.next
        return True
    
    # "reverse a linked list" is a helper function in this this palindrome problem
    def reverse(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        return prev