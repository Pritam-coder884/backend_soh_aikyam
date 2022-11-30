const {User}=require("../models");

const createUser=async(req,res)=>{
    try{
        // console.log(req.body);
        const user=new User(req.body);
        const createUser=await user.save();
        res.status(200).send(createUser);
        
    }catch(error){
        res.status(500).send({message:"internal server error"});
    }
} 

const getAllUser=async(req,res)=>{
    try{
        const getUsers=await User.find();
        res.status(200).send(getUsers);
    }catch(error){
        res.status(500).send(error);
    }
}




module.exports={
    createUser,
    getAllUser,
}