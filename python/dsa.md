```py
# ============================
# PYTHON DSA CHEAT SHEET
# ============================

# -------- BASIC I/O --------
n = int(input())
print("this is a value of n:", n)


# -------- ARRAYS (LISTS) --------
age = [0] * 5
age = [12, 4, 5, 2, 5]

for x in age:
    print(x)

age.append(x)
age.insert(i, x)
val = age[i]
age[i] = x
age.pop(i)          # remove by index
age.remove(x)       # remove by value
l = len(age)
age.sort()
age.sort(reverse=True)
age.reverse()
age.count(x)
m1 = min(age)
m2 = max(age)


# -------- LINKEDLIST (deque) --------
from collections import deque

ll = deque()
ll.append(x)        # addLast
ll.appendleft(x)    # addFirst
ll.pop()            # removeLast
ll.popleft()        # removeFirst
ll[0]               # first
ll[-1]              # last


# -------- HASHSET (set) --------
s = set()
s.add(x)
s.remove(x)
flag = (x in s)
size_s = len(s)


# -------- TREESET (sorted set behavior) --------
import bisect

s = set()
arr = sorted(s)
first = arr[0] if arr else None
last = arr[-1] if arr else None
# ceiling
# assumes arr sorted
idx = bisect.bisect_left(arr, x)
ceiling = arr[idx] if idx < len(arr) else None
# floor
idx = bisect.bisect_right(arr, x) - 1
floor = arr[idx] if idx >= 0 else None


# -------- HASHMAP (dict) --------
mp = {}
mp[key] = val
mp.get(key)
mp.get(key, defaultVal)
flag = (key in mp)
mp.pop(key, None)


# -------- TREEMAP (sorted keys) --------
keys = sorted(mp.keys())
first_key = keys[0] if keys else None
last_key = keys[-1] if keys else None

idx = bisect.bisect_left(keys, k)
ceiling_key = keys[idx] if idx < len(keys) else None

idx = bisect.bisect_right(keys, k) - 1
floor_key = keys[idx] if idx >= 0 else None


# -------- STACK (list) --------
st = []
st.append(x)
top = st.pop()
peek = st[-1]
empty = (len(st) == 0)


# -------- QUEUE (deque) --------
q = deque()
q.append(x)     # add
v = q.popleft() # poll
peek = q[0]


# -------- DEQUE (deque) --------
dq = deque()
dq.appendleft(x)
dq.append(x)
dq.popleft()
dq.pop()
dq[0]       # peekFirst
dq[-1]      # peekLast


# -------- PRIORITY QUEUE (heapq) --------
import heapq

pq = []                     # min heap
heapq.heappush(pq, x)
val = heapq.heappop(pq)
top = pq[0]

# max heap
maxpq = []
heapq.heappush(maxpq, -x)
val = -heapq.heappop(maxpq)


# -------- STRINGS --------
s1 = "Hello"
s2 = "World"

l = len(s1)
ch = s1[0]
s = s1 + " " + s2
equal = (s1 == s2)
sub = s1[1:4]

s1.lower()
s1.upper()
s1.strip()
"He" in s1

s1.replace('l', 'p')
s1.replace("Hell", "Y")

num = int("123")
s3 = str(123)

# Mutable string via list
temp = list("Hello")
temp.append('!')
joined = "".join(temp)

# Mutable string via StringIO
from io import StringIO

sb = StringIO()
sb.write("Hello")
sb.write(" World")
final_str = sb.getvalue()
```