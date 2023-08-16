const db = require("../../db/db");
const product = db.product;
const deleteProduct = async (req, resp) => {
  try {
    const pp = await product.findById(req.params.id);
    if (!pp) {
      resp.status(500).json({
        success: false,
        message: "product not found",
      });
    } else {
      await product.deleteOne({ _id: req.params.id });
      resp.status(200).json({
        success: true,
        pp,
      });
    }
  } catch (err) {
    console.log("eerr", err);
  }
};
module.exports = deleteProduct;
