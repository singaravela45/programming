```java
//basic i/o
import java.util.*;
public class code {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        System.out.println("this is a value of n:"+n);
        scan.close();
    }
}
//arrays
int[] age = new int[5];
int[] age = {12, 4, 5, 2, 5};
for(int i = 0; i < age.length; i++){
    System.out.println(age[i]);
}
```

```java
//collections
//arraylist
ArrayList<Integer> list = new ArrayList<>();
list.add(x);
list.add(index, x);
list.get(i);
list.set(i, x);
list.remove(i);       // by index
list.remove(obj);     // by value
list.size();
list.isEmpty();
ArrayList<Boolean> list = new ArrayList<>(Collections.nCopies(n + 1, true)); // for initializing 
Collections.fill(list,0); //only for changing the existing elements
Collections.sort(list);
Collections.sort(list, Collections.reverseOrder());   // descending
Collections.rotate(list, k);   
Collections.reverse(list);
Collections.frequency(list, x);
int m1 = Collections.min(list);

int m2 = Collections.max(list);
int freq = Collections.frequency(list, x);

//LinkedList
LinkedList<Integer> ll = new LinkedList<>();
ll.add(x);
ll.addFirst(x);
ll.addLast(x);
ll.removeFirst();
ll.removeLast();
ll.get(i);

//HashSet -- unordered set 
HashSet<Integer> set = new HashSet<>();
set.add(x);
set.remove(x);
set.contains(x);
set.size();

//tree set - ordered set 
TreeSet<Integer> ts = new TreeSet<>();
ts.add(x);
ts.remove(x);
ts.contains(x);
ts.first();
ts.last();
ts.ceiling(x);
ts.floor(x);

//hash map
HashMap<Integer, Integer> map = new HashMap<>();
map.put(key, val);
map.get(key);
map.getOrDefault(key, defaultVal);
map.containsKey(key);
map.remove(key);


//tree map
TreeMap<Integer, Integer> tm = new TreeMap<>();
tm.put(k, v);
tm.get(k);
tm.firstKey();
tm.lastKey();
tm.ceilingKey(k);
tm.floorKey(k);

//stack
Stack<Integer> st = new Stack<>();
st.push(x);
st.pop();
st.peek();
st.isEmpty();

//queue
Queue<Integer> q = new LinkedList<>();
q.add(x);
q.offer(x);
q.poll();    // remove + return
q.peek();
Queue<Integer> q = new ArrayDeque<>();

//dequeu
Deque<Integer> dq = new ArrayDeque<>();
dq.addFirst(x);
dq.addLast(x);
dq.removeFirst();
dq.removeLast();
dq.peekFirst();
dq.peekLast();

//pq
PriorityQueue<Integer> pq = new PriorityQueue<>(); //min heap
PriorityQueue<Integer> maxpq = new PriorityQueue<>(Collections.reverseOrder()); //max heap
pq.add(x);
pq.offer(x);
pq.poll();   // pop smallest
pq.peek();

//string
// Java String Cheat Sheet
// 1. Declaration & Initialization
String str1 = "Hello";               // literal
String str2 = new String("World");   // constructor
// 2. Length & Access
int len = str1.length();             // number of characters
char ch = str1.charAt(0);            // access character at index
String s = str1 + " " + str2;       // using +
String s2 = str1.concat(str2);      // using concat()
str1.equals(str2);                   // true if contents equal
str1.equalsIgnoreCase(str2);         // ignore case
str1.compareTo(str2);                // 0 if equal, <0 if str1<str2, >0 if str1>str2
str1.contains("He");                 // substring exists?
// 6. Substring
String sub = str1.substring(1, 4);   // index 1 to 3
// 7. Replace
str1.replace('l', 'p');              // replace characters
str1.replace("Hell", "Y");           // replace substring

// 8. Trim & Case Conversion
str1.trim();                          // remove spaces
str1.toLowerCase();                   // lowercase
str1.toUpperCase();                   // uppercase

// 9. Conversion
int num = Integer.parseInt("123");    // String -> int
String s3 = String.valueOf(123);      // int -> String

// 10. Mutable Strings (Efficient for DSA)
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");      // add at end
sb.insert(1, "i");        // insert at index
sb.delete(1, 3);          // delete range
sb.reverse();             // reverse string
sb.toString();            // convert to String
```