const express = require("express");
const router = express.Router();
const { auth, isAdmin, isStudent } = require("../middleware/auth")
//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos,getTodoById } = require("../controllers/getTodo.js");
const { updateTodo} = require("../controllers/updateTodo");
const { deleteTodo} = require("../controllers/deleteTodo");

//define APi routes
router.post("/createTodo",createTodo);
router.get("/getTodos", auth,isStudent,getTodos);
router.get("/getTodos/:id",auth,isStudent, getTodoById);
router.put("/updateTodo/:id",auth,isStudent, updateTodo);
router.delete("/deleteTodo/:id",auth,isStudent, deleteTodo);

module.exports = router;