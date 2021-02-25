const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify:false,
});


// const me = new User({
//   name: "jeny",
//   age: 30,
//   email: "jendeb@gmail.com",
//   password: "    qwerty123   ",
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log(error);
// });

// const t1 = new Task({
//   description: "complete rest api",
//   completed: false,
// });

// t1.save().then(()=>{
//     console.log(t1);
// }).catch((error)=>{
//     console.log(error);
// })
