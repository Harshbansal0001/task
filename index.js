const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;


const cookieParser=require("cookie-parser")
app.use(cookieParser());
//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
const userRoutes =require("./routes/user")
//mount the todo API routes
app.use("/api/v1", todoRoutes);
// route import and mount 
const user = require("./routes/user");
app.use("/api/v1",userRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby</h1>`);
});
