//mongoose connection code
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

//mongo compass/atlas connection
mongoose.set("strictQuery", false);
mongoose
  .connect(DB)
  .then(() => console.log("connection successfull"))
  .catch((err) => {
    console.log("connection failed");
  });
