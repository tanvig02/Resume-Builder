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
//import user created modules
require("./mongoose_db/connect");
const port = process.env.PORT;

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

app.listen(port, () => {
  console.log(`listing to server at ${port} port`);
});
