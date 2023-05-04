const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ID: {
      type: String,
    },
    ID_value: {
      type: String,
    },
    address: {
      type: String,
    },
    blood_group: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    age: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    emergency_contact: {
      type: String,
    },
    guardian_label: {
      type: String,
    },
    guardian_name: {
      type: String,
    },
    martial_status: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    nationality: {
      type: String,
    },
    ocupation: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    region: {
      type: String,
    },
    sex: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("tasks", TaskSchema);
