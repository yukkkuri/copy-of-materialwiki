const express = require("express");

const app = require("./app");
const mongoose = require("mongoose");


require("dotenv").config();
// const path = require("path");
// const logger = require("./middleware/logger");
// const multer = require("multer");

const PORT = process.env.PORT || 5000;


/*
 * mongoose connection 
 */
const uri = process.env.ATLAS_URI;// database uri
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });// the latter object deals with updates to mongoDB
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});


//set up the port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});



