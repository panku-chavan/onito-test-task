const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("tasks", TaskSchema);
