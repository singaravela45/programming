//portal
import { createPortal } from "react-dom";
const App = () => {
  return createPortal(<section>hello</section>, document.querySelector(".selectclass"));
};
// a portal is a way to render children into a DOM node that exists outside the parent component's hierarchy
// -----------------------
// useeffect
// We setup useEffect hook to run some code WHEN
//  👉 Component renderes for the (First Time)
//  👉  & WHENEVER it re-renders
//  👉  & some data in our component changed.

// import { useEffect, useState } from "react";
// 1. Without the empty array
// const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log("call useEffect");
//     document.title = `Increment (${value})`;
//   });
//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };

// 2. useEffect - Conditional
// You cannot wrap hook with conditional statment
// If you want logic you'll have to put it inside your hook.
// const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log("call useEffect");
//     if (value > 0) {
//       document.title = `Increment (${value})`;
//     }
//   });

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };

// 3. useEffect - Dependency List
// empty array means (it will ONLY run on inital render)
// passing value to array means (it will re-render when that value changed)
// const App = () =>  {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("call useEffect");
//     if (value > 0) {
//       document.title = `Increment (${value})`;
//     }
//   }, [value]);

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };
// -------------------------------
// Fetching Data from 3rd party
// const App = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function getData() {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       if (data && data.length) setData(data);
//     }
//     getData();
//   }, []);

//   return (
//     <>
//       <ul>
//         {data.map((item) => (
//           <li key={Math.random()}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

//Prop drilling happens when you pass data (props) from a parent component down to deeply nested child components,
// even if the intermediate components don’t need the data — they just “forward” it.
// ------------------------------
//context api
//  The Context API lets you share data across the component tree without having to pass props manually at every level.
// Think of it like a global store for part of your app.
// It has 3 main parts:
// createContext – creates the context object.
// Provider – wraps components and provides the data.
// useContext – allows any child component to consume the data.

// import React, { createContext, useContext, useState } from "react";
// // 1. Create context
// const UserContext = createContext();

// function App() {
//   const [user, setUser] = useState("Alice");
//   return (
//     // 2. Provide context value
//     <UserContext.Provider value={user}>
//       <Parent />
//     </UserContext.Provider>
//   );
// }
// function Parent() {
//   return <Child />;
// }
// function Child() {
//   return <GrandChild />;
// }
// function GrandChild() {
//   // 3. Consume context
//   const user = useContext(UserContext);
//   return <h1>Hello, {user}!</h1>;
// }
//to use prop in another file you have to export the context from parent and import the context in child file
// --------------------------------
//usereducer
// useReducer is a React hook that’s an alternative to useState.
// It’s useful when:
// You have complex state logic (with multiple conditions).
// const [state, dispatch] = useReducer(reducer, initialState);
// state → current state value
// dispatch → function to trigger an action
// reducer → function that takes (state, action) and returns a new state
// dispatch always ends up calling reducer(state, action).
// You never call reducer directly yourself — React/dispatch handles that.

// import React, { useReducer } from "react";
// 1. Reducer function
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }
// function Counter() {
//   // 2. useReducer hook
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// const [state, dispatch] = useReducer(reducer, { name: "Alice" });
// function reducer(state, action) {
//   switch (action.type) {
//     case "setName":
//       return { ...state, name: action.payload };
//     default:
//       return state;
//   }
// }
// // update
// dispatch({ type: "setName", payload: "Bob" });

// ----------------------------
//useref
// useRef is a React hook that gives you a mutable object that stays the same between renders.
// It looks like this:
// const ref = useRef(initialValue);
// ref → returns an object with a .current property.
// .current → can hold any value (DOM element, number, string, function, etc.).
// Updating .current does not cause re-.
// useRef is use to manage any kind of DOM manipulations.

// import { useRef } from "react";renders
// function App() {
//   const inputElement = useRef(null);
//   const focusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value = "HuXn";
//   };
//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={() => focusInput()}>Focus & write HuXn</button>
//     </>
//   );
// }
// export default App;

// ----------------
// custom hooks
// A custom hook is basically a JavaScript function that:
// Starts with the word use (so React knows it’s a hook).
// Uses other hooks inside (useState, useEffect, useReducer, useRef, etc.).
// Helps you reuse logic across multiple components.
// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.
// import useFetch from "./useFetch";
// const Home = () => {
//   // using our custom hook 👇
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return (
//             <ul key={item.id}>
//               <li>{item.title}</li>
//             </ul>
//           );
//         })}
//     </>
//   );
// };
// const App = () => {
//   return <Home />;
// };
// export default App;

//custom hooks
// Importing our custom hook 👇
// import useFetch from "./useFetch";
// const Home = () => {
//   // using our custom hook 👇
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return (
//             <ul key={item.id}>
//               <li>{item.title}</li>
//             </ul>
//           );
//         })}
//     </>
//   );
// };
// const App = () => {
//   return <Home />;
// };
// export default App;