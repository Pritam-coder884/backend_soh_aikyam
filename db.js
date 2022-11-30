const mongoose=require("mongoose");
const mongodbConnection=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongodb Database is connected to ${connection.connection.host}`);
         
    }catch(error){
        console.log(`Error:${error.message}`);
    }
}
module.exports=mongodbConnection