 #py equivalent for int_max
inf = float('inf')
neg_inf = float('-inf')


# zip:
combines elements of multiple lists
A: 1  2  3
B: 4  5  6
→ zip → (1,4), (2,5), (3,6)

result = list(zip(a, b))
for x, y in zip(a, b):
    print(x, y)

# enumerate() 
lets you loop through a list and automatically get the index + value together.
arr = [10, 20, 30]
for i, value in enumerate(arr):
    print(i, value)

# map()
taking input
arr = list(map(int, input().split()))

arr = [1, 2, 3]
result = list(map(lambda x: x * 2, arr))

print(result)

# filter
filter() keeps only the elements that match a condition.
arr = [-2, 5, 0, -7, 3]

positive = list(filter(lambda x: x > 0, arr))
print(positive)

# sorted
sorted() returns a new sorted list from any iterable (list, tuple, string, set, etc.) without changing the original.

sorted(iterable, key=None, reverse=False)
for sorting based on first element
items = [(3, 9), (1, 5), (2, 8)]
sorted(items, key=lambda x: x[0])

# any and all
if all(x > 0 for x in arr):
    print("All are positive")

# min and max
words = ["hi", "hello", "python"]
print(max(words, key=len))
i = arr.index(min(arr))  # index of smallest value

# matrix 
grid = [[0]*m for _ in range(n)]

# reversed() vs .reverse()

reversed() - does not change the original arr and ✔returns an iterator
for i in reversed(range(5)):
    print(i)

.reverse()  
✔ modifies the list in-place  no iterator 
arr = [1,2,3]
arr.reverse()      

# bisect module 

from bisect import bisect_left
i = bisect_left([1, 2, 4, 4, 5], 4)
print(i)    # → 2
✔ first occurrence
✔ lower bound (like C++)

bisect_right(a, x) or bisect(a, x)
i = bisect_right([1, 2, 4, 4, 5], 4)
✔ upper bound (like C++)
✔ last occurrence + 1

# regular expression

import re

re.search() – find something:

text = "I love Python"
result = re.search("Python", text)

re.match() – starts at the beginning

re.match("I", "I love Python")   # matches
re.match("love", "I love Python") # no match

re.findall() – find all matches:

text = "My numbers are 12 and 45"
numbers = re.findall(r"\d+", text)

re.sub() – replace text
text = "I like cats"
new_text = re.sub("cats", "dogs", text)

Basic Matching:
abc	Literal characters: Matches the exact sequence of characters.
.	Matches any single character (except a newline, by default).
|	Escaping metacharacters: Matches the literal metacharacter.

Character Sets:
[abc]	Matches any single character a, b, or c.	
[a-z]	Matches any single character in the range a through z.
[^abc]	Negated set: Matches any single character not in the set.

Special Sequences:
.	any character
\d	Matches any decimal digit.
\D	Matches any non-digit character.
\w	Matches any "word" character (alphanumeric + underscore).
\W	Matches any non-word character.	
\s	Matches any whitespace character (space, tab, newline, etc.).
\S	Matches any non-whitespace character.

quantifiers:
{n}	Exactly n occurrences.
{n,m}	Between n and m occurrences (inclusive, greedy).
{n,}	n or more occurrences (greedy).
?	Zero or one occurrence (optional).
+	one or more
*	zero or more
^	start of string
$	end of string

if re.search(r"\d", "abc123"):
    print("Has a number")
re.match(r"Hello", "Hello world")
if re.match(r"\w+@\w+\.\w+", email):
    print("Looks like an email")
text = "Name: Alex"
match = re.search(r"Name: (\w+)", text)
print(match.group(1))

