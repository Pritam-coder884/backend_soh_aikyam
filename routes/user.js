const express=require("express");
const route=express.Router();
const {UserController}=require("../controllers");

route.post("/user",UserController.createUser);
route.get("/user",UserController.getAllUser);

module.exports=route;
