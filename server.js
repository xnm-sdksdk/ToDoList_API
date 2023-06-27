const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import the Routes
const todoRoutes = require("./routes/todo.route.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/todo/", (req, res) => {
  res.status(200).json({ message: "Welcome to the To Do List Rest API!" });
});

app.use("/api/todo/list", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not recognized." });
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";
app.listen(PORT, () => console.log(`Server running: http://${HOST}:${PORT}`));
