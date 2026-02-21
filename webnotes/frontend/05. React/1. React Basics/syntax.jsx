// first create a react project using npm create vite@latest
// then change directory to the project and then npm i

// components:
// from one component we should returon only one parent
// should close html tags
// use className instead of class for html
// use htmlfor instead of for inside label tags
// to execute js use {} inside jsx

// const App = () => {
//   return React.createElement(
//     "section",
//     {
//       id: "section",
//     },
//     React.createElement("h1", null, "My Website"),
//     React.createElement(
//       "article",
//       null,
//       React.createElement("h2", null, "Welcome To React"),
//       React.createElement(
//         "p",
//         {
//           class: "text",
//         },
//         "Paragraph Content"
//       )
//     )
//   );
// };
// React.createElement(
//   "h2", // type of element (HTML tag name or component)
//   null, // props (none here)
//   "Welcome To React" // children (the text node)
// );

//props:
// in parent
// {/* <UserStatus loggedin={true} username="Alice" />; */}
// in child
// const UserStatus = (props) => {
//   return <div>{props.loggedin ? `Welcome, ${props.username}` : "Please log in"}</div>;
// };
// // or use destructuring
// const UserStatus = ({ loggedin, username }) => {
//   return <div>{loggedin ? `Welcome, ${username}` : "Please log in"}</div>;
// };
//  They are read-only — a child component can use them but can’t change them.
// They allow reusability — you can pass different props and get different results without rewriting the component.
// They flow one way — from parent → child (top-down data flow).

//adding style
//inline css
// 1. use double curly braces {{property: value}}
// you'd also need to use camelCase convention for styling.

// const App = () => {
//   return (
//     <section>
//       <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
//         Inline Style
//       </h1>
//     </section>
//   );
// };
// 2. Seperate Styles and then interpolate it.
// const App = () => {
//   const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };

//   return (
//     <section>
//       <h1 style={styles}>Inline Style</h1>
//     </section>
//   );
// };

//seperate css
// import "./index.css";

// const App = () => {
//   return (
//     <section>
//       <h1>Seperate File For Styling</h1>
//     </section>
//   );
// };

// export default App;

//icons
// 👉 https://react-icons.github.io/react-icons
// 👉 npm install react-icons --save
// 👉 import { AiOutlineHourglass } from "react-icons/ai";
// 👉  <AiOutlineHourglass />
// import { AiOutlineHourglass } from "react-icons/ai";
// const App = () => {
//   return (
//     <h1>
//       <AiOutlineHourglass />
//     </h1>
//   );
// };

//events:
// const Button = () => {
//   // const handleClick = () => console.log("You Clicked Me");
//   const handleClick = () => console.log(Math.round(Math.random() * 10));
//   return <button onClick={handleClick}>Click</button>;
// };

//states:
// It starts with an initial value (you decide what that is).
// It can change over time (usually in response to user actions, API calls, timers, etc.).
// When it changes, React re-renders the component so the UI matches the new state.
// import { useState } from "react";
const Counter = () => {
  //we are creating a new state with default value as 0 and when we want to update use setcount fn
  const [count, setCount] = useState(0);  //count = state value, setCount function = updater
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
// const App = () => {
//   return <Counter />;
// };

//updating arrays
// const App = () => {
//   const [friends, setFriends] = useState(["Alex", "John"]);
//   const addOne = () => setFriends([...friends, "HuXn"]);
//   const removeOne = () => setFriends(friends.filter((f) => f !== "John"));
//   const updateOne = () => {
//     setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));
//   };
  // return (
//     <div>
//       {friends.map((t) => (
//         <li key={Math.random()}>{t}</li>
//       ))}
//       <button onClick={addOne}>Add One</button>
//       <button onClick={removeOne}>Remove One</button>
//       <button onClick={updateOne}>Update One</button>
//     </div>
//   );
// };

//updating objects
// const App = () => {
//   const [movie, setMovie] = useState({
//     title: "Equalizer 3",
//     ratings: 7,
//   });
  // const handleClick = () => {
//     // 🥂 To tell react about state updates, we have to give react a brand new object.
//     // 👉 LONG WAY
//     // const copyMovie = {
//     //   // This will copy all the properties, into the new object, and then we can change whatever we want in new object.
//     //   ...movie,
//     //   ratings: 5,
//     // };
//     // setMovie(copyMovie);
//     // 👉 SHORT WAY
//     setMovie({ ...movie, ratings: 5 });
//   };
//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.ratings}</p>
//       <button onClick={handleClick}>Change Ratings</button>
//     </div>
//   );
// };

//updating array of objects
// const App = () => {
//   const [movies, setMovies] = useState([
//     { id: 1, title: "Spiderman", ratings: 3 },
//     { id: 2, title: "Superman", ratings: 6 },
//   ]);
  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 4" } : m))
    );
};
  
//using forms
const Form = () => {
  const [username, setUsername] = useState("");
  const handleChange = (evt) => {
    setUsername(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`You typed: ${username}`);
    setUsername("");
  };
  return (
    <div>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};