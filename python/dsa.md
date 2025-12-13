# Array / List
arr = [1, 2, 3]
Add element at end	arr.append(x)
Insert at index	arr.insert(i, x)
Remove first occurrence	arr.remove(x)
Remove by index	arr.pop(i)
Delete range	del arr[i:j]
Length	len(arr)
Reverse	arr.reverse()
Sort	arr.sort()
Check membership	x in arr
Access
arr[i]      # index
arr[i:j]    # slicing

# Tuple
create : t = (1, 2, 3)
Access index	t[i]
Count element	t.count(x)
Find index	t.index(x)

# String
Immutable sequence of characters.
ord('a')
Length	len(s)
Slice	s[i:j]
Split	s.split()
Join	' '.join(list)
Replace	s.replace(a, b)
Find	s.find(sub)
Uppercase	s.upper()

# Set
s = {1, 2, 3}
Add	s.add(x)
Remove (error if missing)	s.remove(x)
Discard (no error)	s.discard(x)
Union	`s1
Intersection	s1 & s2
Difference	s1 - s2
Membership	x in s
st={i for i in range (n)}

# Dictionary
d = {"a": 1, "b": 2}
Access value	d[key]
Safe access	d.get(key)
Add/update	d[key] = value
Remove key	d.pop(key)
Keys	d.keys()
Values	d.values()
Items	d.items()

# Stack
stack = []
stack.append(x)   # push
stack.pop()       # pop
//user defined stack
class Stack:
    def __init__(self):
        self.items = []

    def push(self, value):
        self.items.append(value)

    def pop(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.items.pop()

    def peek(self):
        if self.is_empty():
            raise Exception("Stack is empty")
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)


# Queue 
from collections import deque
q = deque()
q.append(x)    # enqueue
q.popleft()    # dequeue

# Priority Queue / Heap
min-heap by default
import heapq
h = []
heapq.heappush(h, x)
heapq.heappop(h)                
heapq.heapify(h)

# linked List
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

node1 = Node(10)

def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev=None
        curr=head
        while curr:
            temp=curr.next
            curr.next=prev
            prev=curr
            curr=temp
        return prev
Asset Yogi is your complete Finance Guide. Everything about money, investments & business is explained in the easiest way. 

# tree
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


# collections
## counters
Counter is a subclass of dict for counting hashable objects.
It stores elements as keys and their counts as values.
```py
from collections import Counter
c = Counter([1, 2, 2, 3, 3, 3])
print(c)  # Counter({3: 3, 2: 2, 1: 1})
c.most_common(2) #first n element with higheset freq
freq = Counter(words) 
```
# defaultdict
d = defaultdict(list)

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

