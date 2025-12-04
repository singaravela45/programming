// BASICS:
console.log("Hello World");
console.error("This is an ERROR");
console.warn("Warning");
console.table({ name: "HuXn", age: 20, location: ["USA"] });

// PRIMITIVES:
let variable; // undefined
let name = "HuXn WebDev";

// COMPARISION OPERATORS:

// RELATIONAL OPERATORS
// > Greater Then
// < Less Then
// >= Greater Then or equal to
// <= Less Then or equal to

// EQUALITY OPERATORS
// === strict equality (Type + Value)
// !== strict non-equality (Type + Value)
// == Lose equality (values)
// != Lose equality (values)

// STRINGS:
//1. CONCATENATION
// let fullName = firstName + " " + lastName;
let fullName = firstName.concat(lastName);
//2. APPEND
// firstName += " something else"
//3. LENGTH
console.log(firstName.length);
//4. CASES
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
//5. SLICE
console.log(fullName.slice(0, 3));
//6. SPLIT & JOIN
console.log(fullName.split("").join("-"));
//7. INCLUDES
console.log(fullName.includes("HuXn"));
//8. TRIM
console.log(fullName.trim());

// TYPE CONVERTION:
// - Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount)
floatValue = parseFloat(floatValue);
//  - Convert number to string
money = money.toString();
money = String(money);

// CONTROL FLOW:
// SWITCH
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
// FOR LOOP
for (let i = 0; i <= 1000; i++) {
  console.log("HuXn WebDev", i);
}
// while
while (i <= 5) {
  console.log("Hello World", i);
  i++;
}

//DATA STRUCTURES:
//ARRAYS:
const myList = [];
const numberArray = [2, 4, 6, 8];
console.log(myArray[0]);
console.log(pl.includes("Golang"));
console.log(pl.join("-"));
console.log(pl.reverse());
console.log(pl.slice(0, 3));
// | Method     |                                      Description                                       |
// | ---------- | :------------------------------------------------------------------------------------: |
// | concat()   |                     joins two or more arrays and returns a result                      |
// | includes() |                    checks if an array contains a specified element                     |
// | push()     |    aads a new element to the end of an array and returns the new length of an array    |
// | unshift()  | adds a new element to the beginning of an array and returns the new length of an array |
// | pop()      |          removes the last element of an array and returns the removed element          |
// | shift()    |         removes the first element of an array and returns the removed element          |
// | sort()     |          sorts the elements alphabetically in strings and in ascending order           |
// | slice()    |                 selects the part of an array and returns the new array                 |
// | splice()   |             removes or replaces existing elements and/or adds new elements             |

//OBJECTS:
// Creating Object
let person = {
  firstName: "HuXn",
  lastName: "WebDev",
  age: 18,
  location: ["Planet", "Earth"],
  isProgrammer: true,
  greet: function greet() {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
  },
};
// Accessing Properties
console.log(typeof person);
console.log(person.location[1]);
console.log(person["isProgrammer"]);
console.log(Object.keys(person));
console.log(Object.values(user)); 
console.log(Object.entries(user)); 

// console.log(person[isProgrammer]); // ERROR -> without quotes
// Updating Properties
console.log(person.firstName);
console.log((person.firstName = "Sam"));
// Add new properties
console.log((person.isProgrammer = false));
console.log(person);
//using functions
console.log(person.greet());

//function:

// When we provide function as an (argument) to other function/argument that function is known as callback function.
function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}
// callback function
function callMe() {
  console.log("I am callback function");
}
// passing function as an argument (callback)
greet("Peter", callMe);

//json
// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
//  JSON is often used for transmitting data between a server and a web application, as well as for storing configuration settings and data.

// In JavaScript, JSON is represented as a string, and it closely resembles JavaScript object literal notation.
// It consists of key-value pairs, where keys must be strings, and values can be strings, numbers, booleans, arrays, or nested objects.
// The key-value pairs are separated by commas, and the entire JSON object is enclosed in curly braces {}.

//json format:
const person1 = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    zipCode: "10001",
  },
};
// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person);
// Parse JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);

//date and time:
const date = new Date();
//accessing
// const year = date.getFullYear();
// const month = date.getMonth(); // Month is 0-based (0: January, 1: February, ..., 11: December)
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// setInterval(function () {
//   console.log("This function will be executed every 2 seconds.");
// }, 2000);
// The setInterval function will continue to execute the specified code at the specified interval
//  until it is stopped using the clearInterval function.

// Execute a function after 3 seconds
// setTimeout(function () {
//   console.log("This function will be executed after 3 seconds.");
// }, 3000);

