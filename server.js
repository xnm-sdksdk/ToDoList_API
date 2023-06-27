const express = require("express");
const cors = require("cors");

// Import the Routes
const todoRoutes = require("./routes/todo.route");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/todo", (res) => {
  res.status(200).json({ message: "Welcome to the To Do List Rest API!" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not recognized." });
});

app.use("/api/todo/list", todoRoutes);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";
app.listen(PORT, () => console.log(`Server running: http://${HOST}:${PORT}`));
