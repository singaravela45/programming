//setup
// for small testing with using coderunner
// 1. create a tsconfig file -- npx tsc --init
// 2. create a package json file and make the type to commonjs add this in package json -- "type": "commonjs",

// for projects
// tsc --init
// we can change target in tsconfig,files include,exclude,outdir to compile only certain file  Visit https://aka.ms/tsconfig to read more 
// --------------------------------------------------
// TypeScript automatically "annotates" through a powerful feature called type inference.
//This means that the compiler can automatically determine the type of a variable, function,
// or expression based on its value or context, reducing the need for you to write explicit type annotations
// let tech = "TypeScript";
// let favNumber = 8;
// let tsHard = true;
// console.log(tech, favNumber, tsHard);
// ERROR
// tech = false
// favNumber = "Hello"
// tsHard = 20

//anytype
// let color: any = "crimson";

//function annotation
//parameters
// Regular Func
// function addOne(num: number) {
//   return num + 1;
// }
// Arrow Func Annotations
// const double = (x: number, y: number) => x * y;
// const res = double(2, 10);
// console.log(res);
//return type annotation
// Regular Function
// function double1(x: number): number {
//   return x * x;
// }
// const res = double1(2);
// console.log(res);
//  Using Arrow Functions
// const double2 = (x: number): number => x * x;
// const res2 = double2(2);
// console.log(res2);

//arrays
// const nums: number[] = [1, 2, 3, 4, 5];
// console.log(nums);
// const items: string[] = ["one", "two", "three"];
// console.log(items);
// items.push("Remote");
// const singleDi: number[] = [1, 2, 3, 4, 5]; 2d array

//objects
// Define a person object
// const person: { firstName: string; lastName: string; age: number } = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };
// Using objects as function return value
// function printUser(): { name: string; age: number; location: string } {
//   return {
//     name: "Alex",
//     age: 19,
//     location: "USA",
//   };
// }
// using objects as function parameter
// function printUserName(person: { firstName: string; lastName: string }) {
//   console.log(`${person.firstName} ${person.lastName}`);
// }

//optional property
// type User = {
//   name: string;
//   age?: number;
//   location: string;
// };
// const user: User = {
//   name: "HuXn",
//   age: 20,
//   location: "Arabic",
// };

//readonly
// type Person = {
//   name: string;
//   age: number;
//   readonly email: string;
// };
// const user: Person = {
//   name: "John",
//   age: 20,
//   email: "test@gmail.com",
// };
// user.email = "john@gmail.com" // 🚫 Not Valid
// --------------------------------------------------
//type alias
// type User = {
//   name: string;
//   age: number;
//   location: string;
// };
// const printUserInfo = (user: User) => {
//   return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
// };
// for a function
// type AliasName = (parameter1: Type1, parameter2: Type2) => ReturnType;

//intersection of types
// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };
// type AccountDetails = {
//   email: string;
//   password: string;
// };
// type User = UserInfo & AccountDetails;
// const huxn: User = {
//   first: "HuXn",
//   last: "WebDev",
//   age: 18,
//   email: "test@gmail.com",
//   password: "strongpassword123",
// };

//unions of types
// let password: string | number = 20;
// const items: (number | string)[] = [1, 3, "hello"];

//literal types
// let color: "red" | "blue" | "green";

//tuples
//same as array but fixed size
//tuple can have any data type but array have same data type
// let mixedResponse: [number, string] = [200, "OK"];

//enums
// By default, TypeScript enums are numeric.
//  The first member is assigned the value 0, and each subsequent member is auto - incremented by 1
// enum WeatherConditions {
//   Sunny = "sunny",
//   Cloudy = "cloudy",
//   Rainy = "rainy",
//   Snowy = "snowy",
// }
// const currentWeather = WeatherConditions.Sunny;
// --------------------------------------------------
// Interface definition
// interface Computer {
//   name: string;
//   ram: number;
//   hdd: number;
// }
// // Usage
// const computerExample: Computer = {
//   name: "i7",
//   ram: 16,
//   hdd: 23000,
// };
// Interface for a function
// interface MathOperation {
//   (x: number, y: number): number;
// }
// const add: MathOperation = (a, b) => a + b;
// extending intereface
// interface MovieDetails {
//   readonly name: string;
//   ratings: number;
//   printMovieInfo(name: string, price: number, ratings: number): string | number;
// }
// interface MovieGenra extends MovieDetails {
//   genra: string;
// }
// Original interface
//to extend a same interface just use the same name
// interface Car {
//   brand: string;
//   start(): void;
// }
// // Declaration merging (interface extension)
// interface Car {
//   model: string;
//   stop(): void;
// }
// --------------------------------------------------
//generics
// function uniqueDataTypeFunc<Type>(
//   item: Type,
//   defaultValue: Type
// ): [Type, Type] {
//   return [item, defaultValue];
// }
// // Example usage
// const num = uniqueDataTypeFunc<number>(42, 0);
// Example usage with a custom type
// interface Dog {
//   name: string;
//   breed: string;
// }
// const dogPair = uniqueDataTypeFunc<Dog>(
//   { name: "Buddy", breed: "Labrador" },
//   { name: "Default", breed: "Unknown" }
// );

// using objects
// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKey = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKey, value: obj[randKey] };
// }
// Example usage with strings
// const stringObject = { a: "apple", b: "banana", c: "cherry" };
// const randomStringPair = getRandomKeyValuePair<string>(stringObject);
// console.log(randomStringPair); // Outputs: { key: 'a', value: 'apple' } (random)

// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//   return array.filter((item) => condition(item));
// }
// // Example usage with an array of numbers
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
// console.log(evenNumbers); // Outputs: [2, 4, 6, 8, 10]

// -----------------------------------
// typeguard
// type MyType = string | number;
// // Example function with type guard
// function exampleFunction(value: MyType): void {
//   // Type guard using typeof
//   if (typeof value === 'string') {
//     // Within this block, TypeScript knows that 'value' is a string
//     console.log(value.toUpperCase());
//   } else {
//     // Within this block, TypeScript knows that 'value' is a number
//     console.log(value.toFixed(2));
//   }
// }
// -----------------------------------