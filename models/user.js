const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email id already present"],
    },
    password: {
        type: String, 
        required: true 
    },
    confirmPassword:{
        type: String, 
        required: true 
    }
});
module.exports= mongoose.model("user", userSchema);