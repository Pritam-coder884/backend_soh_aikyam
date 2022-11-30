const { Router } = require("express");
const express=require("express");
const route=express.Router();
const {AlumniController}=require("../controllers");

route.post("/alumni",AlumniController.createAlumni);
route.get("/alumni",AlumniController.getAllAlumni);
module.exports=route;
