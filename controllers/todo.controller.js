const db = require("../models/index.model");
const Todo = db.todos;

// Get All To Dos
exports.getList = async (req, res, next) => {
  try {
    const todoList = await Todo.find();
    res.status(200).json(todoList);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something went wrong. Please try again later.",
    });
  }
};

// Get To Do By Id
exports.getTodoById = async (req, res, next) => {
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404).json({
        message: "To Do not found.",
      });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something went wrong. Please try again later.",
    });
  }
};

// Post To Do
exports.createTodo = async (req, res, next) => {
  try {
    const { title, description, completed, dueDate, priority, tags } = req.body;

    console.log(title, description, completed, dueDate, priority, tags);
    console.log(req.body);
    // Check for all fields
    if (
      !title ||
      !description ||
      completed === undefined ||
      !dueDate ||
      !priority ||
      !tags
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check for input type
    if (typeof title !== "string" || typeof description !== "string") {
      return res
        .status(400)
        .json({ message: "Insert fields must be a string." });
    }

    // Check for the priority input
    const validPriority = ["Not Important", "Important", "Very Important"];
    if (!validPriority.includes(priority)) {
      return res.status(400).json({
        message: "Invalid priority.",
      });
    }

    // Check for the Due Date
    let todoDate = new Date(dueDate);
    if (todoDate <= Date.now()) {
      return res.status(400).json({
        message: "Invalid date.",
      });
    }

    const completedBool = Boolean(completed);

    // Check for existing todo
    const existTodo = await Todo.findOne({ title });
    if (existTodo) {
      return res.status(400).json({
        message: "To Do with the given name already exists.",
      });
    }

    const todo = new Todo({
      title: title,
      description: description,
      completed: completedBool,
      dueDate: dueDate,
      priority: priority,
      tags: tags,
    });
    await todo.save();

    const response = {
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
      dueDate: todo.dueDate,
      priority: todo.priority,
      tags: todo.tags,
    };

    res
      .status(201)
      .json({ message: "To Do created successfully!", todo: response });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something went wrong. Please try again later.",
    });
  }
};

// Put To Do By Id
exports.updateTodo = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const { title, description, completed, dueDate, priority, tags } = req.body;

    const todo = await Todo.findByIdAndUpdate(todoId, { new: true });

    if (!todo) {
      return res.status(404).json({ message: "To Do not found." });
    }

    const existTodo = await Todo.findOne({ title });
    if (existTodo) {
      return res.status(400).json({
        message: "To Do with the given name already exists.",
      });
    }

    todo.title = title;
    todo.description = description;
    todo.completed = completed;
    todo.dueDate = dueDate;
    todo.priority = priority;
    todo.tags = tags;

    await todo.save();

    res.status(200).json({ message: "To Do updated successfully", todo: todo });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something went wrong. Please try again later.",
    });
  }
};

// Delete By Id
exports.deleteTodo = async (req, res, next) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndRemove(todoId, { new: true });

    if (!todo) {
      return res.status(404).json({ message: "To Do not found." });
    }

    res.status(202).json({ message: "To Do deleted successfully." });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something went wrong. Please try again later.",
    });
  }
};

// Get By Priority
exports.getByPriority = async (req, res, next) => {
  try {
    const { priority } = req.query;

    if (!priority) {
      return res.status(400).json({ message: "Priority is required!" });
    }

    const validPriority = ["Not Important", "Important", "Very Important"];
    if (!validPriority.includes(priority)) {
      return res.status(400).json({ message: "Invalid priority!" });
    }

    const toDo = await Todo.find({ priority: priority });

    res.status(200).json(toDo);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Something went wrong. Please try again later.",
    });
  }
};
