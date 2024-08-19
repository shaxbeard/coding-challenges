# A simple implementation of a linked list node:
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# For testing purposes:
def print_list(head):
    current_node = head

    while current_node:
        print(current_node.val)
        current_node = current_node.next


# Actual solution to Leetcode problem:
def reverse_list(head):
    a = None
    b = head

    while b:
        c = b.next
        b.next = a
        a = b
        b = c

    return a


# Testing
n5 = ListNode("e")
n4 = ListNode("d", n5)
n3 = ListNode("c", n4)
n2 = ListNode("b", n3)
n1 = ListNode("a", n2)

print("Before reversal:")
print_list(n1)

reverse_list(n1)

print("After reversal:")
print_list(n5)