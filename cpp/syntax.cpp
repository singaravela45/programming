//comments
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