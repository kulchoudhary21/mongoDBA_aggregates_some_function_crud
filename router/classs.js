const express = require("express");
const router = express.Router();
const getClasss = require("../controller/classs/getClasss");
const createClasss = require("../controller/classs/createClasss");
const updateClasss=require("../controller/classs/updateClass")

router.post("/add", createClasss);
router.get("/get", getClasss);
router.put("/update/:id",updateClasss)

module.exports = router;