const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//using dotenv for "secure" connection, out database url will be stored in env file
//to use varialbe of env file, we need to give the "path" and use "process.env.<varName>"
// dotenv.config({ path: "/server/config.env" });
dotenv.config({ path: `${__dirname}/.env` });
// const DB = process.env.DATABASE;
//import user created modules
require("./mongoose_db/connect");
const port = process.env.PORT;
console.log(port);

//middlewares
//converting the data in json form
app.use(express.json()); //routing
app.use(require("./router/asynAuth"));

// const middleware = (req, res, next) => {
//   console.log("im middleware");
//   next();
// };
// app.get("/", (req, res) => {
//   res.send("home page");
// });
// app.get("/about", middleware, (req, res) => {
//   res.send("about page");
// });

// app.use(express.static(path.join(__dirname, "./package.json")));
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// app.use(require("../"))
// console.log(path.join(__dirname, "../client/build/index.html"));

app.listen(port, () => {
  console.log(`listing to server at ${port} port`);
});
