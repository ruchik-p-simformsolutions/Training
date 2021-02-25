require('../src/db/mongoose');

const { response } = require('express');
const Task=require('../src/models/task');

// Task.findByIdAndDelete("6034c3e68be216c5fefd27e8").then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:false});
// }).then((cou)=>{
//     console.log(cou);
// }).catch((e)=>{
//     console.log(e);
// })

const findDeleteCount=async(id)=>{
    const t=await Task.findByIdAndDelete(id);
    const cou=await Task.countDocuments({completed:false});
    return cou;
}

findDeleteCount("6034c3e68be216c5fefd27e8").then((cou)=>{
    console.log(cou);
}).catch((e)=>{
    console.log(e);
})