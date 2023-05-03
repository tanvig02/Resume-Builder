const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secreteKey = "secretKey";

require("../mongoose_db/connect");
const user = require("../model/userSchema");

//Verifying the token MiddleWare
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    const verifyT = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await user.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("user not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(400).send("Unauthorised: No token provided");
    console.log(err);
  }
};

//Resume Route
router.get("/template", verifyToken, (req, res) => {
  jwt.verify(req, token, secreteKey, (err, authData) => {
    if (err) {
      res.send({
        msg: "invalid token",
      });
    } else {
      res.json({
        msg: "build your resume",
        authData,
      });
    }
  });
});

//Registration Details
//DataStoring using --async - await
//to render data from register form
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  //req.body.name, req.body.email --> this will be the data filled by user
  console.log(name);

  //validation & statusCode - client error 422.
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all details" });
  }

  try {
    //finding if email exist in database or not
    const userExist = await user.findOne({ email: email });
    console.log(userExist);
    if (userExist) {
      // return res.status(422).json({ error: "email already exist" });
      return res.json({
        status: 422,
        data: {
          data: "email already exist",
          message: "email already exist",
        },
      });
    } else if (password != cpassword) {
      // return res.status(422).json({ message: "incorrect details" });
      return res.json({
        status: 422,
        data: {
          data: "password incorrect",
          message: "password incorrect",
        },
      });
    } else {
      const newUser = new user({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      //Hashing "password" -- then save the details
      await newUser.save();
      console.log("save");
      // res.status(201).json({ message: "user registed successfully" });
      return res.json({
        status: 200,
        data: {
          data: "user registed successfully",
          message: "user registed successfully",
        },
      });
    }

    // const newUserRegis = await newUser.save();
    // if (newUserRegis) {
    //   res.status(201).json({ message: "user registed successfully" });
    // } else {
    //   return res.status(500).json({ error: "fail to register" });
    // }
  } catch (err) {
    console.log(err);
  }
});

// Login details
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("nothing in input");
      return res.json({
        error: "fill all details",
      });
    }
    //checking if email present or not in database
    const userLogin = await user.findOne({ email: email });

    if (userLogin) {
      // console.log(userLogin.password);
      // console.log(userLogin.cpassword);
      const userPass = await bcrypt.compare(password, userLogin.password);

      console.log("before token generated");
      const tokenG = await userLogin.generateAuthToken();
      console.log(tokenG);
      //to store token in a cookie we hav a cookie funtion that takes <token_name>, <token _value>, expire time
      res.cookie("jwtoken", tokenG, {
        //setting time for expiring the token, adding 30day from user login
        expires: new Date(Date.now() + 258920000000),
        httpOnly: true,
      });
      res.status(200).json({ user: user._id });
      //Generating token
      // jwt.sign(
      //   { userLogin },
      //   secreteKey,
      //   { expiresIn: "60s" },
      //   (err, token) => {
      //     res.json({
      //       token,
      //     });
      //     console.log("token generated");
      //   }
      // );

      //if password matches
      if (userPass) {
        return res.json({
          message: "user login successfully",
        });
      } else {
        return res.status(400).json({
          error: "invalid credentials",
        });
      }
    } else {
      return resstatus(400).json({
        error: "invalid credentials",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
