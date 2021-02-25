const print=async()=>{
    return "hello";
}
print().then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
})

//console.log(print())

const add=(a,b)=>{
    return new Promise((response,reject)=>{
        if(a<0||b<0) return reject("both should be positive");
        response(a+b);
    })
}

const dowork=async()=>{
    const sum=await add(10,5);
    const sum1=await add(sum,-88);
    const sum2=await add(sum,9);
    return sum2;
}

dowork().then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
})