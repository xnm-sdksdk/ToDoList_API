const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.route("/").get(todoController.getList);

router.route("/:id").get(todoController.getTodoById);

router.route("/").post(todoController.createTodo);

router.route("/:id").put(todoController.updateTodo);

router.route("/:id").delete(todoController.deleteTodo);

module.exports = router;
