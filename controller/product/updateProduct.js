const db = require("../../db/db");
const product = db.product;
const updateProduct = async (req, resp) => {
  try {
    console.log(req.params);
    let products = await product.findById(req.params.id);
    // const updateProduct=await product.findByIdAndUpdate(req.params.id,req.body)
    products = await product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    resp.status(200).json({
      success: true,
      products,
    });
    // resp.send(":W`ORKING")
  } catch (err) {
    console.log("eerr", err);
  }
};
module.exports = updateProduct;
