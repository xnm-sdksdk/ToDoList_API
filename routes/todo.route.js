const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.route("/")
        .get(todoController.getList)
        .post(todoController.createTodo);
        

router.route("/search").get(todoController.getByPriority);

router.route("/:id")
        .get(todoController.getTodoById)
        .put(todoController.updateTodo)
        .delete(todoController.deleteTodo);



module.exports = router;
