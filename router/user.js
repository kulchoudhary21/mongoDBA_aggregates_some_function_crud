const express = require("express");
const router = express.Router();
const getUsers = require("../controller/users/getUser");
const createUsers = require("../controller/users/createUser");

router.post("/add", createUsers);
router.get("/get", getUsers);
// router.put("/update/:id", updateProduct);
// router.delete("/delete/:id", deleteProduct);

module.exports = router;
