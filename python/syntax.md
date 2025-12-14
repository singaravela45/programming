```python
site_name = 'programiz.pro'
num = int(input('Enter a number: ')) #input
print(site_name) #output
print(f"Name: {bike1.name}, Gears: {bike1.gear} ")
type(site_name) #type checker
num_string = int(num_string) #type convertion:
#for loop
for lang in languages:
    print(lang)
# iterate from i = 0 to i = 3
for i in range(0, 4):
    print(i)
#functions:
def greet():
    print('Hello World!')
greet()
```
~~~py
#data structures
#lists -ordered ,mutable ,allow duplicates
#The index of the last element is -1
ages = [19, 26, 29]
print(ages)
len(ages) #length
append(),extend(),insert(),remove(),pop(),clear(),index(),
count(),sort(),reverse(),copy()
#tuple :Ordered ,Allow duplicates,Immutable
numbers = (1, 2, -5)
#sets:
student_id = {112, 114, 116, 118, 115}
cars.add("32")
#Dictionary
country_capitals = {
  "Germany": "Berlin"
}
~~~
## oops
```py
class Person:
    def __init__(self, name, age):#constuctor
        self.name = name
        self.age = age
p = Person("Alice", 25)
p.name
#When you create an object from a class, self lets the object use its own data.
# every method should have  self as first argument

#inheritance
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        print(self.name + " makes a sound.")

# Child class (Derived class)
class Dog(Animal,Mammal): #declaring sub class for two parents
    def speak(self):
        print(self.name + " barks.")

#super() is a built-in Python function used inside a child class to call methods from its parent class.
class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def speak(self):
        super().speak()  # Call parent version
        print("Dog barks")

dog = Dog()
dog.speak()
#Polymorphism
#The same method can work with different types of objects.
```

## numpy
```py
#Creation
import numpy as np
a = np.array([1, 2, 3])
z = np.zeros((2, 3)) #create a 2d array with given size filled with 0s
o = np.ones((3, 3)) 
r = np.arange(0, 10, 2)
l = np.linspace(0, 1, 5)
rng = np.random.default_rng()
rand = rng.random((3, 3))
#Inspection
a.shape        # dimensions
a.ndim         # number of axes
a.dtype        # data type
a.size         # total elements
a.nbytes       # memory (bytes)
#Reshaping & Axis Ops
a.reshape(2, 3)  
a.ravel()               # flatten view
a.flatten()             # flatten copy
a.transpose()
np.expand_dims(a, axis=0)
np.squeeze(a)
#slicing
a[1:4]
a[:, 0]
a[::2]
a[a > 5] 
#Broadcasting
a + 5
a + np.array([1, 2, 3])     # row-wise broadcast
#Math & Aggregation
np.sum(a)
np.mean(a)
np.std(a)
np.min(a)
np.max(a)
np.argmin(a)
np.argmax(a)
np.exp(a)
np.log(a)
np.sqrt(a)
#Linear Algebra
np.dot(a, b)
a @ b                   # matrix multiply
np.linalg.norm(a)
np.linalg.solve(A, b)
np.linalg.eig(A)
#Copies vs Views
b = a                   # no copy
b = a.view()            # view
b = a.copy()            # real copy

```