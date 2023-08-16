const db = require("../../db/db");
const product = db.product;
const createProduct = async (req, resp) => {
  console.log("req.body", req.body);
  const { name, description, price } = req.body;
  if (!req.body) {
    resp.status(403).json({
      message: "No data available",
      success: false,
    });
  } else if (!name || !description || !price) {
    resp.status(400).json({
      message: "No data available",
      success: false,
    });
  } else {
    const data = await product.create(req.body);
    resp.status(201).json({
      message: "product added sucessfully",
      success: true,
    });
  }
};
module.exports = createProduct;
