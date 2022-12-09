const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

mongoose
  .connect(
    "mongodb+srv://ridelyadmin:iamridelyadmin@cluster0.rditmgy.mongodb.net/retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => console.log("Connected to db"));

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

//const connectDB = require("./database/db.js");

//connectDB();
//const connectDB = require("./database/conn.js");

//dotenv.config({ path: "./env" });

//connectDB();
//require("./database/conn");

//connect with

/*
mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Connected to DB");
}).catch((err) => {
  console.log(err.message);
});*/
