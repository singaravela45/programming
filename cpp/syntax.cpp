//comments
// header 
#include <bits/stdc++.h>   
// Vector
vector<int> v(n, 0);
v.push_back(x);
v.pop_back();
v.size();
v.clear();
v.empty();
v.front();
v.back();
v.begin();
v.end();
sort(v.begin(), v.end());
reverse(v.begin(), v.end());

//string 
string s = "hello";
s.length();
s.size();
s.substr(pos, len);
s.find("abc");
s.push_back('a');
s.pop_back();
reverse(s.begin(), s.end());

// pairs
pair<int,int> p = {1,2};
p.first;
p.second;

//Stack
stack<int> st;
st.push(x);
st.pop();
st.top();
st.empty();
st.size();

//Queue
queue<int> q;
q.push(x);
q.pop();
q.front();
q.back();
q.empty();

//Deque
deque<int> dq;
dq.push_back(x);
dq.push_front(x);
dq.pop_back();
dq.pop_front();

//Priority Queue (Heap)
//max heap
priority_queue<int> pq;
//min heap
priority_queue<int, vector<int>, greater<int>> pq;
pq.push(x);
pq.pop();
pq.top();
pq.size();
pq.empty();

// Set (Ordered Unique)
set<int> s;
s.insert(x);
s.erase(x);
s.find(x);
s.count(x);
s.lower_bound(x);
s.upper_bound(x);

// Multiset (Ordered, Duplicates Allowed)
multiset<int> ms;

//Unordered Set (Hash Set)
unordered_set<int> us;

//Map (Ordered Key-Value)
map<int,int> mp;
mp[key] = value;
mp.insert({key,value});
mp.erase(key);
mp.find(key);
mp.count(key);

//Unordered Map (Hash Map)
unordered_map<int,int> ump;

//functions:
//min  or max
min(a,b);
max(a,b);
*min_element(v.begin(), v.end());
*max_element(v.begin(), v.end());
//count
count(v.begin(), v.end(), x);


//useful macro
#define ll long long
#define pb push_back
#define mp make_pair
#define all(x) x.begin(), x.end()
#define fastio ios::sync_with_stdio(false); cin.tie(NULL);

