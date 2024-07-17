# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

# Examples
# 'abracadabra' => 5
# 'oolong' => 3
# 'talented' => 3'

def vowelCount(str):
    vowels = "aeiou"
    count = 0
    for char in str:
        if char in vowels:
            count += 1
    return count

print(vowelCount("talented"), 3)