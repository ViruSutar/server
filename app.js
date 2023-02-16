const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "./.env" });
const contact = require('./Routes/contacts');
const logger = require("./config/logger");
const cors = require('cors');



//setup template engine
app.set("view engine", "ejs");


// middlewares
app.use(express.json());

// enable cors
app.use(cors());

// routes
app.use('/api/contacts',contact)

// Home route
app.get("/", (req, res) => {
  // res.render("home");
  res.send("hello from backend")
});

 module.exports = app