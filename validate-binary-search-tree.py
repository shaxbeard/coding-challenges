class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        def valid(node, left, right):
            if not node:
                return True # an empty BST is technicall valid
            if not (node.val < right and node.val > left):
                return False
            
            # node.val is the num that node.right must be less than (in the demo)?
            # does this also go for the left side? (he didn't explain this for the left)
            return (valid(node.left, left, node.val) and valid(node.right, node.val, right))
        return valid(root, float("-inf"), float("inf")) # start with -Infinity and +Infinity

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def valid(node, left, right):
            if not node:
                return True
            if not (left < node.val < right):
                return False

            return valid(node.left, left, node.val) and valid(
                node.right, node.val, right
            )

        return valid(root, float("-inf"), float("inf"))