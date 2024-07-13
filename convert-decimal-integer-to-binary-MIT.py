# CONVERTING DECIMAL INTEGER TO BINARY

# Consider example of
# ◦ x = 1*24 + 0*23 + 0*22 + 1*21 + 1*20 = 10011
 
#  If we take remainder relative to 2 (x%2) of this number,
# that gives us the last binary bit
#  If we then divide x by 2 (x//2), all the bits get shifted
# right
# ◦ x//2 = 1*23 + 0*22 + 0*21 + 1*20 = 1001
#  Keep doing successive divisions; now remainder gets next
# bit, and so on
#  Let’s us convert to binary form


num = 19
if num < 0:
    isNeg = True
    num = abs(num)
else:
    isNeg = False
    result = ""
if num == 0:
    result = "0"

while num > 0:
    result = str(num%2) + result 
    num = num//2
if isNeg:
    result = "-" + result

print("The result is:", result)