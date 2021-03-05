const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task=require('../models/task');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("age must be positive");
      }
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("cannot contain 'password'...");
      }
    },
  },
  tokens:[{
    token:{
      type:String,
      required:true,
    }
  }],
  avatar:{
    type:Buffer
  }
},{
  timestamps:true
});

userSchema.virtual('tasks',{
  ref:'Task',
  localField:'_id',
  foreignField:'owner'
})

//hashing password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//deleting tasks of user
userSchema.pre('remove',async function(next){
  const user=this;
  await Task.deleteMany({owner:user._id});
  next();
})


userSchema.methods.toJSON= function(){
  const user=this;
  const userObject=user.toObject();

  delete userObject.tokens;
  delete userObject.password;
  delete userObject.avatar;
  return userObject;
}

userSchema.methods.getUserAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens=user.tokens.concat({token});
  await user.save();
  return token; 
};

userSchema.statics.findByCredentails = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("unable to login");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
