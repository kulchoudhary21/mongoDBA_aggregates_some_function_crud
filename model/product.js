const productModel = (mongoose) => {
  const productSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    price: Number,
  });
  const product = new mongoose.model("product", productSchema);
  return product;
};
module.exports = productModel;
