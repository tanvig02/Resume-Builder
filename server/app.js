const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const fpdf = require("node-pdf");

//using dotenv for "secure" connection, out database url will be stored in env file
//to use varialbe of env file, we need to give the "path" and use "process.env.<varName>"
dotenv.config({ path: "./config.env" });
// const DB = process.env.DATABASE;
const port = process.env.PORT;
//import user created modules
require("./mongoose_db/connect");

//middlewares
//converting the data in json form
app.use(express.json()); //routing
app.use(require("./router/asynAuth"));

const middleware = (req, res, next) => {
  console.log("im middleware");
  next();
};
// app.get("/", (req, res) => {
//   res.send("home page");
// });
app.get("/about", middleware, (req, res) => {
  res.send("about page");
});
app.get("/contact", (req, res) => {
  res.send("contact page");
});
// app.get("/signin", (req, res) => {
//   res.send("sign in page");
// });
// app.get("/login", (req, res) => {
//   res.send("lonin page");
// });

app.listen(port, () => {
  console.log(`listing to server at ${port} port`);
});
