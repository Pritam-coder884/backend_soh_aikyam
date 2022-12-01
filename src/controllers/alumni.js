const {Alumni}=require("../models");

const createAlumni=async(req,res)=>{
    try{
        const alumni=new Alumni(req.body);
        const createAlumni=await alumni.save();
        res.status(200).send(createAlumni);
    }catch(error){
        res.status(500).send({message:"internal server error"});
    }
}

const getAllAlumni=async(req,res)=>{
    try{
        const getAlumnis=await Alumni.find();
        res.status(200).send(getAlumnis);
    }catch(error){
        res.status(500).send({message:"internal server error"});
    }
}
const searchAlumni = async (req, res) => {
    try{
        const keyword = req.query.search ? {
            $or: [{ name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
            { interest: { $regex: req.query.search, $options: "i" } },
        ]
        }:{}
        const data = await Alumni.find(keyword);
        res.status(200).json(data);
    }catch(err){
        res.status(500).send({message:"internal server error"});
    }
}

module.exports={
    createAlumni,
    getAllAlumni,
    searchAlumni
}