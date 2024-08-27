# 104. Maximum Depth of Binary Tree

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: 3

# Example 2:
# Input: root = [1,null,2]
# Output: 2

# Recursive DFS
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # base case
        if not root:
            return 0
        
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

# BFS
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        level = 0
        # initialize an empty queue (I think)
        q = deque([root]) # He says most languages have a queue data structure
        while q: 
            for i in range(len(q)): # loop through the entire level
                node = q.popleft() # always pop from the left of the queue
                if node.left:
                    q.append(node.left) # always push to the right of the queue
                if node.right:
                    q.append(node.right)
            level += 1
        return level
            


