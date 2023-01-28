const express = require("express");
const router = express.Router();

require("../mongoose_db/connect");
const user = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello form router");
});

//DataStoring using --promise
//to render data from register form
router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  //req.body.name, req.body.email --> this will be the data filled by user
  console.log(name);

  //validation & statusCode - client error 422
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all details" });
  }

  user
    .findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "email already exist" });
      }

      const newUser = new user(name, email, phone, work, password, cpassword);
      //name:req.body.name, email:req.body.email
      newUser
        .save()
        .then(() => {
          res.status(201).json({ message: "user registed successfully" });
        })
        .catch((err) => {
          return res.status(500).json({ error: "fail to register" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

// module.exports = router;
