class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slow, fast = head, head

        while fast and fast.next:
            slow = slow.next     # increment by 1 each time
            fast = fast.next.next # increment by 2 each time
            if slow == fast:
                return True

        return False # If loop completes, then no cycle
