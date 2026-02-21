//template string
console.log(`Hello my name is ${firstName} ${lastName} & i'm ${19 + 1000} years old.`);
//enhanced object literals:
function user(name, age, work) {
  return {
    name: name,
    age: age,
    work: work,
    intro: function () {
      console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
    },
  };
}
const huxn = user("HuXn", 17, "Programmer");
huxn.intro();

//spread operator:
// SPREAD IN ARRAY
const strNums = ["one", "two", "three"];
const moreStrNums = ["four", "five", "six"];
const concat = [...strNums, ...moreStrNums];
console.log(concat);
//in object
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
// add members obj1 and obj2  to obj3
const obj3 = { ...obj1, ...obj2 };

// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.
//Use .map() → when you want to transform data into a new array.
double = (...numbers) => numbers.map((num) => num * 2);

// Use .forEach() → when you just want to run code for each element (side effects like logging, DOM updates, etc.)
// and don’t care about returning anything

//destructing array
const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;

//object destructing
const student = { name: "HuXn", position: "First", rollno: "27" };
const { name, position, rollno } = student;
// In object destructuring order doesn't matter but the name does matter

//for loops:

//for in loop:
//used in objects
let person = {
  name: "HuXn",
  age: 17,
  gender: "Male",
};
for (let key in person) {
  console.log(key, person[key]);
}

//for of loop:
//used to iterate arrays, strings, maps, sets, and more
let peoples = ["huxn", "alex", "john", "brad"];
for (let people of peoples) {
  console.log(people);
}

//for each
//same as for of but we cannot end loop early
colors.forEach((color) => console.log(color));

//map helper
// The map() method creates a new array populated with the results of
//  calling a provided function on every element in the calling array.
const results = peoples.map((person) => {
  return [person.firstName, person.lastName];
});

//filter helper:
// The filter() method is a built-in array method in JavaScript that allows you
//  to create a new array containing elements that pass a certain condition. 
// It provides a clean and concise way to filter out elements from an array based on a specified criteria.
const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];
console.log(songs.filter((song) => song.duration > 3));

//every and some helper
// const peoples = ["huxn", "jordan", "alex"];
const res = peoples.every((people) => people.length === 4);
const res2 = peoples.some((people) => people.length < 3);
//both returns bool
//  every return true if all the elements satisfies the cond
// some return true if all the elements satisfies the cond

//find helper
// The find() method   allows you to find the first element in an array that matches a specific condition.
// It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.
// const peoples = [
//   { name: "huxn", age: 17 },
//   { name: "john", age: 18 },
//   { name: "alex", age: 20 },
//   { name: "jimmy", age: 30 },
//   { name: "alex", age: 30 },
// ];

// const res = peoples.find((person) => person.name === "alex");

//maps
const map = new Map();
const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};
map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");
console.log(map.get(keyOne));
console.log(map.get(keyTwo));
console.log(map.get(keyThree));
console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);
// Iterating Over Map
for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}
for (let key of map.keys()) {
  console.log(key);
}
for (let value of map.values()) {
  console.log(value);
}

//sets
const set = new Set();
set.add();
set.add("string");
set.add({ name: "huxn" });
set.add(10);
console.log(set.size);
console.log(set.keys());
console.log(set.has({ name: "huxn" }));
set.delete(10);
console.log(set);
// Iterating over sets.
for (let item of set) {
  console.log(item);
}

//annotations:
// explicitly declare the type of a variable, function parameter, or return value
//strings
// let myVar: type = value
// let myName: string = "HuXn WebDev";
// myName = "Another Name";
// console.log(myName);
// ERROR
// myName = 12;
//number
// let favNumber: number = 7;
//boolean 
// let tsHard: boolean = false;