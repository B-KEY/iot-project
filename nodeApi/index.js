const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");

const app = express();
app.use(json());


if (!process.env.TOKEN_KEY) {
    console.log("Api secret token is missing!");
    process.exit(1);
  }

if (!process.env.MONGO_DATABASE_URL) {
    console.log("Mongo URL is missing!");
    process.exit(1);
  }


  const start = async () => {
    try {
        mongoose.connect(process.env.MONGO_DATABASE_URL);

        app.listen(5000, () => {
            console.log(`Listening at http://localhost:5000`);
          });
    } catch(err){
        console.log("start error", err.message)
    }
  }


  start();