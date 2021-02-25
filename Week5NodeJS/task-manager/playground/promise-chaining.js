require("../src/db/mongoose");

const User = require("../src/models/user");

//6036138baa828d4e0b270798
// User.findByIdAndUpdate("6036138baa828d4e0b270798", { age: 35 }).then((user) => {
//     // console.log(user);
//     return User.countDocuments({ age: 35 });
// }).then((val) => {
//     console.log(val);
// }).catch((e) => {
//     console.log(e);
// });


const findUpdateCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age:15});
    const cou=await User.countDocuments({age});
    return cou;
}

findUpdateCount('6036138baa828d4e0b270798',35).then((cou)=>{
    console.log(cou);
}).catch((e)=>{
    console.log(e);
})