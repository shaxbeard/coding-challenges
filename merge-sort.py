def mergeSort(arr):
    # base case
    if len(arr) <= 1:
        return arr
    
    # Define the left and right halves
    mid = arr.length // 2
    left = arr[:mid]
    right = arr[mid:]

    # Recursively split the array into halves until each subarray has just 1 element
    sortedLeft = mergeSort(left)
    sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)

# "Merge two sorted arrays" as helper function
def merge(left, right):
    merged = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    # Append any remaining elements from either left or right
    merged.extend(left[i:])
    merged.extend(right[j:])

    return merged