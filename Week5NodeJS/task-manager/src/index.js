const express=require('express');
require("./db/mongoose");
const User=require("./models/user");
const Task=require("./models/task");


const app=express();
const port=process.env.PORT||3000;

app.use(express.json());

app.post('/users',(req,res)=>{
    // console.log(req.body);
    const user=new User(req.body);
    // res.send("succes..");
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users);
    }).catch((e)=>{
        res.send(e);
    })
})

app.get('/users/:id',(req,res)=>{
    const _id=req.params.id;
    User.findById(_id).then((user)=>{
        if(!user) return res.status(404).send("not found");
        res.send(user);
    }).catch((e)=>{
        res.status(500).send(e);
    })
})

app.post('/tasks',(req,res)=>{
    //
    const task=new Task(req.body);
    task.save().then(()=>{
        res.status(201).send(task);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks);
    }).catch((e)=>{
        res.status(500).send(e);
    })
})

app.get('/tasks/:id',(req,res)=>{
    Task.findById(req.params.id).then((task)=>{
        res.send(task);
    }).catch((e)=>{
        res.status(500).send({
            error:"not found"
        });
    })
})

app.listen(port,()=>{ 
    console.log('server is up at port '+port);
})