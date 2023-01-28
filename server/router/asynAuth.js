const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../mongoose_db/connect");
const user = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello form router");
  // res.sendFile(__dirname + "/index.html");
});
router.get("/template", (req, res) => {
  res.send("hello form router");
  // res.sendFile(__dirname + "/index.html");
});

//Registration Details
//DataStoring using --async - await
//to render data from register form
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  //req.body.name, req.body.email --> this will be the data filled by user
  console.log(name);

  //validation & statusCode - client error 422
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all details" });
  }

  try {
    //finding if email exist in database or not
    const userExist = await user.findOne({ email: email });
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
        status: false,
        data: {
          data: "fill all details",
          message: "fill all details",
        },
      });
    }
    //checking if email present or not in database
    const userLogin = await user.findOne({ email: email });

    if (userLogin) {
      console.log(userLogin.password);
      console.log(userLogin.cpassword);
      const userPass = await bcrypt.compare(password, userLogin.password);

      const tokenG = await userLogin.generateAuthToken();
      console.log(tokenG);

      // res.cookie("jwtoken", tokenG, {
      //   //setting time for expiring the token, adding 30day from user login
      //   expires: new Date(Date.now + 258920000000),
      //   httpOnly: true,
      // });

      if (userPass) {
        return res.json({
          status: true,
          data: {
            data: "user login successfully",
            message: "user login successfully",
          },
        });
      } else {
        return res.json({
          status: false,
          data: {
            data: "invalid credentials",
            message: "invalid credentials",
          },
        });
      }
    } else {
      return res.json({
        status: false,
        data: {
          data: "user not exist",
          message: "user not exist",
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
