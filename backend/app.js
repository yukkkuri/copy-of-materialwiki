const express = require("express")
const app = express();
const cors = require('cors');
const imageRouter = require("./routes/image");

//middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/image", imageRouter);

/*
 * unused code
 */

//setup the upload image folder
// app.use(express.static("./public"));

module.exports = app;