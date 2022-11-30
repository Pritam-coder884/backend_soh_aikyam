const { Router } = require("express");
const express=require("express");
const route=express.Router();
const {StudentController}=require("../controllers");

route.post("/student",StudentController.createStudent);
route.get("/student",StudentController.getAllStudent);
module.exports=route;
