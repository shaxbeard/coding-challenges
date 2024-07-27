


# def characterReplacement(s, k):
#     count = {}
#     res = 0

#     l = 0
#     for r in range(len(s)):
#         # increment the count of the char at index r
#         # if the char is not in hash table, return a default of 0
#         count[s[r]] = 1 + count.get(s[r], 0) 

#         # Check if each "window" is valid
#         # He says that you could probably use if instead of while
#         while (r - l + 1) - max(count.values()) > k: # check the max VALUE in hash table
#             # If window is INVALID
#             count[s[l]] -= 1 # decrement the count of num at left pointer
#             l += 1 # AND increment the index of the left pointer

#         res = max(res, r - l + 1) # check the size of the window
#     return res


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

