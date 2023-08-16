const express = require("express");
const bodyParser = require("body-parser");
const product = require("./router/product");
const user = require("./router/user");
const classs=require("./router/classs")
const student=require("./router/student")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/product", product);
app.use("/user", user);
app.use("/student", student);
app.use("/class", classs);

const server = app.listen(3002);
