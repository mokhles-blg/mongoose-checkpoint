// require express

const express = require("express");

// instance of express
const app = express();

// require dotenv and config
require("dotenv").config();

// create the PORT
const PORT = process.env.PORT;

// require the path of the fonction connectdb

const dbconnect = require("./config/connectDB");

// import the function dbconnect
dbconnect();

// middelware body parser
app.use(express.json());

// create routes using middleware
app.use("/api/contact", require("./routes/contacts"));

// create the server
app.listen(PORT, (error) => {
  error
    ? console.error(`failed to connect to the server ${error}`)
    : console.log(`connected to the server ${PORT}`);
});
