const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken')
const express = require("express");
require("./db/mongoose");
const userRoute = require("../src/routers/user");
const taskRoute = require("../src/routers/task");
const Task = require("./models/task");
const User =require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req,res,next)=>{
//   if(req.method==='GET'){
//     res.send('get requets are disabled');
//   }else{
//     next();
//   }
// })

app.use(express.json());
app.use(userRoute);
app.use(taskRoute);

app.listen(port, () => {
  console.log("server is up at port " + port);
});

// const fun=async()=>{
//   const token=jwt.sign({_id:'abc1234'},'thisisjwt',{expiresIn:'7 days'});
//   console.log(token);

//   const ver=jwt.verify(token,'thisisjwt');
//   console.log(ver);
// }

// fun();

const main=async()=>{
  // const task=await Task.findById('603e11052fcd5e1d654cf953');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);

  const user=await User.findById('603e066338ad0ef8a3eb3ce0');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
}
// main(); 


// const multer=require('multer');
// const router = require("../src/routers/user");
// const upload=multer({
//   dest:'images',
//   limits:1000000,
//   fileFilter(req,file,cb){
//     if(!file.originalname.match(/\.(doc|docx)$/)){
//       return cb(new Error("upload a word file"));
      
//     }
//     cb(undefined,true);
//   }
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//   res.send();
// },(error,req,res,next)=>{
//   res.status(400).send({
//     error:error.message
//   })
// })