const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken')
const express = require("express");
require("./db/mongoose");
const userRoute = require("../src/routers/user");
const taskRoute = require("../src/routers/task");

const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());
app.use(userRoute);
app.use(taskRoute);

app.listen(port, () => {
  console.log("server is up at port " + port);
});

const fun=async()=>{
  const token=jwt.sign({_id:'abc1234'},'thisisjwt',{expiresIn:'7 days'});
  console.log(token);

  const ver=jwt.verify(token,'thisisjwt');
  console.log(ver);
}

fun();