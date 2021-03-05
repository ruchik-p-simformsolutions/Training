const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect(process.env.MONGODB_URL, {
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
