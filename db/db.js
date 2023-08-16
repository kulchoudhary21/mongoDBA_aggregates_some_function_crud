const mongoose = require("mongoose");
const productModel = require("../model/product");
const userModel = require("../model/users");
const studentModel = require("../model/student");
const classModel = require("../model/classs");
mongoose
  .connect("mongodb://127.0.0.1:27017/Sample")
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("error to connecting in mongo db");
  });

const db = {};
db.product = productModel(mongoose);
db.users = userModel(mongoose);
db.student = studentModel(mongoose);
db.classs = classModel(mongoose);

module.exports = db;
