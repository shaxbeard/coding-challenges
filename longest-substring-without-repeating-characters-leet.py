#  01234567
# "abcabcbb", len = 8
#       l
#        r
# charSet = {c,}
# res = 3


def lengthOfLongestSubstring(s):
    charSet = set()
    l = 0
    res = 0

    for r in range(len(s)): # r loops over the entire string (instead of initializing r pointer)
        while s[r] in charSet: # keep removing from set until you reach the repeated char
            charSet.remove(s[l]) # remove left char from set
            l += 1 # remove left char from "window"
        charSet.add(s[r]) # add right char to set
        res = max(res, r - l + 1) # this seems to calculate the current length of the set 
    return res

