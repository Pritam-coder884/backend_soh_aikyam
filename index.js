require("dotenv").config();
const express=require("express");
const app=express();
const cors = require('cors');

const {userRoute}=require('./routes');


const mongodbConnection=require("./db");
mongodbConnection();


const authTokenVerifyMiddleware=(req,res,next)=>{
    const admin=require("firebase-admin");
    let firebaseApp=null;
    const serviceAccount=require("./firebaseAdmin.json");
    if(!firebaseApp){
        firebaseApp=admin.initializeApp({
            credential:admin.credential.cert(serviceAccount)
        });
    }

    const tokenString=req.headers['authorization'] ? req.headers['authorization'].split(" ") : null

    if(!tokenString){
        res.send("No header Provided");
    }
    else if(!tokenString[1]){
        res.send("No token Provided");
    }
    else{
        const {getAuth}=require("firebase-admin/auth");
        getAuth()
        .verifyIdToken(tokenString[1])
        .then((decodedToken)=>{
            const uid=decodedToken.uid;
            console.log(uid);
            next()
        })
        .catch((error)=>{
            res.send(error);
        })
    }
    // console.log(tokenString);
}

app.get("/api",authTokenVerifyMiddleware,(req,res)=>{
    res.send("server response");
})

app.use(cors())
app.use(express.json())






app.use('/',userRoute);

const port=process.env.PORT || 7070
app.listen(port,(req,res)=>{
    console.log(`listening to the port number ${port}`);
})