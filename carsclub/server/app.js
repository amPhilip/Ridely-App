const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
//const connectDB = require("./database/conn.js");

//dotenv.config({ path: "./env" });
dotenv.config();

//DB
require("./database/conn");
//connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(require("./router/auth"));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send(`<h1>Backend - Server Runnnig</h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
