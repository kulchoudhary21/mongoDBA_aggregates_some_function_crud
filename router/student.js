const express = require("express");
const router = express.Router();
const getStudent = require("../controller/student/getStudent");
const createStudent = require("../controller/student/createStudent");

router.post("/add", createStudent);
router.get("/get", getStudent);


module.exports = router;
