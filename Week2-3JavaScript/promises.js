// const demoPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve([1,2,3]);
//         reject("failed...")
//     },1000)
// })

// demoPromise.then((result)=>{
//     console.log("success! "+result);
// }).catch((error)=>{
//     console.log(error);
// })


//promise chaining

const add=(a,b)=>{
    return new Promise((response,reject)=>{
        response(a+b);
    })
}

add(1,2).then((res)=>{
    // console.log(res);
    return add(res,2);
}).then((res1)=>{
    console.log(res1);
}).catch((e)=>{
    console.log(e);
})