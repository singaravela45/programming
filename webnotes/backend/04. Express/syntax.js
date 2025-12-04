import express from "express";
const app = express();
app.use((req, res) => {
  res.send("Hello World");
});
app.listen(5000, () => console.log("Listening on port 5000"));

//routing
// Routing refers to how an application’s endpoints (URIs) respond to client requests.
// HTTP Methods
// GET👉 Retrive Data
// POST 👉 Create/Insert Data
// PUT 👉 Completely Update Data
// PATCH 👉 Partially Update Data
// DELETE 👉 Delete Data
// ALL 👉 Any HTTP Request Method
// BASIC ROUTES 👇
app.get("/", (req, res) => {
  res.send("<h1>HOME 🏠 </h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>ABOUT 😶‍🌫️ </h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT 📲 </h1>");
});
app.get("/work", (req, res) => {
  res.send("<h1>MY WORK 💪 </h1>");
});
//shorthand:
app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add new Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Remove Student"));
// More Then One Callback
//  - You cannot post response two times ❌
//  - Don't forget to pass the "next" function ⚠️
//  - (next) function will allows us to run another cb. 🏃‍♂️
//  - here in the first callback you can put your (logic) 🗯️
app.get(
  "/cbexample2",
  (req, res, next) => {
    console.log("First callback");
    next();
  },
  (req, res) => {
    res.send("More then one callback");
  }
);
//router folder
import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teacher.js";
// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// 5. Import route in index.js file
// 6. use the (app.use) built-in middleware & provide your routes.
// Load Router Modules
app.use("/student", student);
app.use("/teacher", teacher);

app.listen(8000, () => console.log("Server Up!"));
//in student folder
import express from "express";
const router = express.Router();
// CAUTION ⚠️
// Beaware when testing this code
// The route methods are totally different from one another
// Which means you'll have to either test it on Postman or Thunder Client
router.get("/all", (req, res) => {
  res.send("All Student");
});
router.post("/create", (req, res) => {
  res.send("New Student created");
});
router.put("/update", (req, res) => {
  res.send("Student updated");
});
router.put("/delete", (req, res) => {
  res.send("Student Deleted");
});
export default router;
// Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
//  The captured values are populated in the (req.params) object, with the name of the route parameter specified in the path as their respective keys.
// Getting Route Params 👇
// app.get("/student/delete/:id", (req, res) => {
//   // console.log(req.params);
//   // const { id } = req.params;
//   res.send(`Student No: ${req.params.id} delete.`);
// });
// Destructuring Route Params
// app.get("/student/delete/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(`Student No: ${id} delete.`);
// });
// Passing Multiple Route Params
// app.get("/product/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Product Category: (${category}), Product Id: (${id})`);
// });

// The app.params() function is used to add the callback triggers to route parameters.
// It is commonly used to check for the existence of the data requested related to the route param.
// app.param(name, callback)
app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});
app.get("/user/:id", (req, res) => {
  console.log("This is User ID Path");
  res.send("Response Ok");
});

//controllers:
// Controllers can group related request handling logic seperately.
// Instead of defining all of your request handling logic as callback in route or
// in route files, you may wish to organize this behavior using controllers modules.
app.use("/student", student);
//in controllers folder  student.js file
const allStudents = (req, res) => {
  res.send("All Student");
};
const newStudent = (req, res) => {
  res.send("New Student created");
};
const updateStudent = (req, res) => {
  res.send("Student updated");
};
const deleteStudent = (req, res) => {
  res.send("Student Deleted");
};
export { allStudents, newStudent, updateStudent, deleteStudent };
    
//query strings:
// A query string is the part of a URL that follows the question mark (?).
// It is used to pass data from the client to the server.
// The query string consists of one or more key-value pairs separated by ampersands (&), where each key is separated from its value by an equals sign (=).

// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(`Response Ok ${req.query.category}`);
// });

// Destructuring
// app.get("/product", (req, res) => {
//   const { category } = req.query;
//   res.send(`Product Category ${category}`);
// });
    
//serving static files
// app.use(express.static)
// express.static is a built-in middleware, which allow us to serve our static files.
// all files are in public folder
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

//middleware
/*
  Request 🙂
  Middleware 🤘
  Response 🙂
*/
// A middleware is just a javascript function
// Which Takes 3 parameters (req, res, next)
function userCredentials(req, res, next) {
  console.log("username: (alex)");
  console.log("email: (alex21@gmail.com)");
  console.log("password: (alex214)");
  console.log("age: (18)");
  next();
}
app.use(userCredentials);
// app.use() adds middleware that runs on every request (unless a path is specified).
app.get("/", (req, res) => {
  res.send("<h1>This is a homepage</h1>");
});