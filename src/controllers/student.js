const {Student}=require("../models");

const createStudent=async(req,res)=>{
    try{
        const student=new Student(req.body);
        const createStudent=await student.save();
        res.status(200).send(createStudent);
        
    }catch(error){
        res.status(500).send({message:"internal server error"});
    }
} 


const getAllStudent=async(req,res)=>{
    try{
        const getStudents=await Student.find();
        res.status(200).send(getStudents);
    }catch(error){
        res.status(500).send({message:"internal server error"});
    }
}






module.exports={
    createStudent,
    getAllStudent,
}