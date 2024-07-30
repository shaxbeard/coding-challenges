# 424. Longest Repeating Character Replacement
# You are given a string s and an integer k. You can choose any character of the string 
# and change it to any other uppercase English character. You can perform this operation at most k times.

# Return the length of the longest substring containing the same letter you can get 
# after performing the above operations.

 
# Example 1:
# Input: s = "ABAB", k = 2
# Output: 4
# Explanation: Replace the two 'A's with two 'B's or vice versa.

# Example 2:
# Input: s = "AABABBA", k = 1
# Output: 4
# Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
# The substring "BBBB" has the longest repeating letters, which is 4.


# DEMO 
# max = 5
# {A:2,B:3}, len = 5   # Count for current window
# "ABABBA", k - 2
#   l
#       r
# Is windowLen - Count[B] <= k ?
# 4 - 2 = 2, So is 2 <= 2? True
# 5 - 3 = 2, So True# 
# 6 - 3 = 3, So False
# 5 - 3 = 2, So True







def characterReplacement(s, k):
    count = {} # Hash table to track the count of each letter
    res = 0 # The max length of any valid substring

    l = 0
    for r in range(len(s)): # right pointer will be generated by range() 
        # increment the count of the char at index r
        count[s[r]] = 1 + count.get(s[r], 0) # if the char is not in hash table, return a default of 0 (JS version?)

        # Check if each "window" is valid
        while (r - l + 1) - max(count.values()) > k: # check the max VALUE in hash table (JS version?)
            # If window is INVALID
            count[s[l]] -= 1 # decrement the count of num at left pointer
            l += 1 # AND increment the index of the left pointer

        res = max(res, r - l + 1) # check window size and update max
    return res


# Optimized solution (slightly)
# def characterReplacement(s, k):
#     count = {}
#     res = 0

#     l = 0
#     maxf = 0
#     for r in range(len(s)):
#         # increment the count of the char at index r
#         # if the char is not in hash table, return a default of 0
#         count[s[r]] = 1 + count.get(s[r], 0) 
#         maxf = max(maxf, count[s[r]])

#         # Check if each "window" is valid
#         # He says that you could probably use if instead of while
#         while (r - l + 1) - maxf > k: # check the max VALUE in hash table
#             # If window is INVALID
#             count[s[l]] -= 1 # decrement the count of num at left pointer
#             l += 1 # AND increment the index of the left pointer

#         res = max(res, r - l + 1) # check the size of the window
#     return res

