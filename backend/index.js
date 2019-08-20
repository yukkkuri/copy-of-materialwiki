const express = require("express");
const cors = require('cors');
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
// routers
const uploadRouter = require("./routes/upload");
const imageRouter = require("./routes/image");

require("dotenv").config();
// const path = require("path");
// const logger = require("./middleware/logger");
// const multer = require("multer");

const PORT = process.env.PORT || 5000;

const app = express();

//enable CORS
app.use(cors())
//Upload Middelware
app.use(fileUpload());
app.use("/upload", uploadRouter);
app.use(express.json());




/*
 * mongoose connection 
 */
const uri = process.env.ATLAS_URI;// database uri
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });// the latter object deals with updates to mongoDB
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

 app.use("/image", imageRouter);


//set up the port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});


/*
 * unused code
 */


// //add built-in body-parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// //set Storage Engine
// const storage = multer.diskStorage({
//     destination: "./public/uploads",
//     filename: function (req, file, callback) {
//         //callback(erro,filename)
//         callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
//     }
// });

// // init image Upload
// const upload = multer({
//     storage: storage
// }).single("newImg"); // single means you only upload a single file each time."newImg" is the name attr of the input form element.

// //initialize middleware
// app.use(logger);

// app.use("/api/members", require("./routes/api/members"));


// //setup the upload image folder
// app.use(express.static("./public"));