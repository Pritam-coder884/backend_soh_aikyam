const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
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
    required:true,
  },
  interest:{
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required:true,
  },
  pyear: {
    type: Number,
    required:true,
  },
  branch: {
    type: String,
    required:true,
  },
  job: {
    type: String,
    required:true,
  },
  location:{
    type:String,
    required:true,
  },
  pic:{
    type:String,
    required:true,
  }


});
module.exports = mongoose.model("alumni", alumniSchema);
