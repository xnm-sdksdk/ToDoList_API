module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now(),
    },
    dueDate: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Not Important", "Important", "Very Important"],
      default: "Important",
      required: true,
    },
    tags: {
      type: [String],
      default: [],
      required: true,
    },
  });
  const Todo = mongoose.model("Todo", schema);
  return Todo;
};
