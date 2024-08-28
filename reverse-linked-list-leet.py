
# 206. Reverse Linked List

# Given the head of a singly linked list, reverse the list, 
# and return the reversed list

# Example 1
# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]

# DEMO
# Input:  1 -> 2 -> 3 -> 4 -> 5 -> NULL
# Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

# Start by looking at a smaller portion
# 1 -> 2 -> 3 -> 
#   <-   X   # Delete right arrow, Add left arrow

# nxt = -> 2
# Null <- 1 <- 2 <- 3 <- NULL
#                   ^                    # prev pointer
#                         ^              # curr pointer
# Step 1 - Save the link between 1 and 2
# Step 2 - Link the 1 to the Null on its left
# ...
# When curr reaches NULL, all the pointers have been changed
# AND we can return prev as the new "head"

# Method 1 - Iterative - O(n) time, O(1) memory because we are just moving pointers
def reverseList(head):
    prev = None
    curr = head

    while curr: # Keep going until curr pointer hits Null node
        nxt = curr.next # save the next pointer in temp var
        curr.next = prev # reverse the list pointer direction
        prev = curr # increment the prev pointer
        curr = nxt # increment the curr pointer
    return prev


# Method #2 - Recursive
def reverseList(head):
    # base case
    if not head: # if head == Null
        return None # is this the same as Null?
    
    newHead = head # we have to establish the new head manually
    if head.next: # keep going as long as there is a next node
        newHead = self.reverseList(head.next) # I am not using "self"
        head.next.next = head # access next pointer of next node
    head.next = None

    return newHead

    
















 


