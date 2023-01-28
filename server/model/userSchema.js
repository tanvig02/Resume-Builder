//creating a module that has schema and collection model which can be used anywhere
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//defining the user Schema of registration page
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  work: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  //for one user multiple tokens can be generated, so we are using array of object
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//password hashing

//here we are call pre function before "save function'
//so this will act as middleware
userSchema.pre("save", async function (next) {
  //is password is modified or present
  if (this.isModified("password")) {
    //password value and 12 no. salt will be added
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//Generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenG = jwt.sign({ _id: this._id }, process.env.SECRETE_KEY);
    this.tokens = this.tokens.concat({ token: tokenG });
    await this.save();
    return tokenG;
  } catch (err) {
    console.log(err);
  }
};

//defining the model --> collectionName and Schema
const user = mongoose.model("USERS", userSchema);

module.exports = user;
