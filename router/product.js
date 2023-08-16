const express = require("express");
const router = express.Router();
const createProduct = require("../controller/product/createProduct");
const getProduct = require("../controller/product/getProduct");
const updateProduct = require("../controller/product/updateProduct");
const deleteProduct = require("../controller/product/deleteProduct");

router.post("/add", createProduct);
router.get("/get", getProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
