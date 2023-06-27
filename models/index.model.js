const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");

const db = {};

db.mongoose = mongoose;

db.url = dbConfig.URL;

(async () => {
  try {
    console.log(db.url);
    await db.mongoose.connect(
      db.url,

      {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      }
    );

    console.log("Connected to the database!");
  } catch (error) {
    console.log("Cannot connect to the database!", error);

    process.exit();
  }
})();

//db.users = require("./users.js")(mongoose);
db.todos = require("./todo.model.js")(mongoose);

module.exports = db;
