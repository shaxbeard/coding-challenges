



def invertTree(root):
    if not root:
        return None
    
    # swap the children
    tmp = root.left
    root.left = root.right
    root.right = tmp

    # recursively invert the left and right sides of the tree
    self.invertTree(root.left)
    self.invertTree(root.right)
    return root