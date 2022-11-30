require("dotenv").config();
const express=require("express");
const app=express();
const http = require("http").Server(app);
const cors = require('cors');

const {studentRoute}=require('./src/routes');
const {alumniRoute}=require("./src/routes");


const mongodbConnection=require("./src/db");
mongodbConnection();



app.use(cors())
app.use(express.json())


// socket IO code
const socketIO = require('socket.io')(http, {
    cors: {
        origin:'*',
    }
});

let users = [];

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });

  socket.on('typing', (data) => socket.broadcast.emit('typingResponse', data));

  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});


app.use('/',studentRoute);
app.use("/",alumniRoute);


app.get("/api",(req,res)=>{
    res.send("server response");
})

const port=process.env.PORT || 7070
app.listen(port,(req,res)=>{
    console.log(`listening to the port number ${port}`);
})