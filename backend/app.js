const express = require("express")
const app = express();
// middlewares
const cors = require('cors');
// routers
const imageRouter = require("./routes/image");

//enable CORS
app.use(cors())

// json body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/image", imageRouter);


/*
 * unused code
 */

//setup the upload image folder
// app.use(express.static("./public"));

module.exports = app;