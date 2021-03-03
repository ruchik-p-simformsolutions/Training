const express = require("express");
const router = express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");
const multer = require('multer');
const sharp=require('sharp');

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.getUserAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentails(
      req.body.email,
      req.body.password
    );
    const token = await user.getUserAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// router.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const user = await User.findById(_id);
//     res.send(user);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: "Invalid updates" });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.status(201).send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) return res.status(404).send();
    await req.user.remove();

    res.status(201).send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  }
  catch (e) {
    res.status(500).send();
  }

})

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
})

const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("only png, jpeg, jpg..."));
    }
    cb(undefined, true);
  }
})

router.post("/users/me/avatar", auth, upload.single("avatar"), async (req, res) => {
  const buffer=await sharp(req.file.buffer).png().resize({
    height:250,
    width:250,
  }).toBuffer();
  req.user.avatar = buffer;
  await req.user.save();
  res.status(200).send();
}, (error, req, res, next) => {
  res.status(400).send({
    error: error.message
  })
})

router.get('/users/:id/avatar',async(req,res)=>{
  try{
    const user=await User.findById(req.params.id);
    if(!user|!user.avatar){
      throw new Error();
    }
    res.set('Content-type','image/png');
    res.send(user.avatar);
  }catch(e){
    res.status(404).send();
  }
  
})


router.delete('/users/avatar/me', auth, async (req, res) => {
  if (!req.user.avatar) {
    return res.status(400).send({
      error: 'no avatar found'
    })
  }
  req.user.avatar = undefined;
  await req.user.save();
  res.status(200).send();
})

module.exports = router;