const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
  },
  mobile: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  regdno: {
    type: Number,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    required: true,
  },
  pyear: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("student", studentSchema);
