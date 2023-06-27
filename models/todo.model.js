module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    created: {
      type: Date,
      default: Date.now(),
    },
    dueDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["Not important", "Important", "Very Important"],
      default: "Important",
    },
    tags: {
      type: [String],
      default: [],
    },
  });
  const Todo = mongoose.model("Todo", schema);
  return Todo;
};
