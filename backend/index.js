const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const logger = require("./middleware/logger");


//a express instance
const app = express();

//add built-in body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//initialize middleware
app.use(logger);

app.use("/api/members", require("./routes/api/members"));



//set up the port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
