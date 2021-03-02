const express = require("express");
const router = express.Router();
const auth=require('../middleware/auth');
const Task = require("../models/task");
const User=require("../models/user");

router.post("/tasks", auth,async (req, res) => {
  const task=new Task({
    ...req.body,
    owner:req.user._id,
  })
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/tasks",auth, async (req, res) => {
  try {
    await req.user.populate('tasks').execPopulate();
    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id=req.params.id;
  try {
    const task = await Task.findOne({_id,owner:req.user._id});
    if(!task){
      res.status(401).send();
    }
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/tasks/:id", auth,async (req, res) => {
  const updates = Object.keys(req.body);
  const listOfTask = ["description", "completed"];
  const isValid = updates.every((update) => listOfTask.includes(update));
  if (!isValid) return res.status(400).send({ error: "invalid updates" });
  const _id=req.params.id;
  try {
    const task=await Task.findOne({
      _id,
      owner:req.user._id
    });

    if (!task) return res.status(404).send();

    updates.forEach((update)=>{
      task[update]=req.body[update];
    })
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", auth,async (req, res) => {
  const _id=req.params.id;
  try {
    const task = await Task.findOneAndDelete({
      _id,owner:req.user._id
    });
    if (!task) return res.status(404).send();
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;