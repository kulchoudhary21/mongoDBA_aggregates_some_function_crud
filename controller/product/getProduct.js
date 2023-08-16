const db = require("../../db/db");
const product = db.product;
const users=db.users
const getProduct = async (req, resp) => {
  try {
    // const products = await db.product.find().limit(3);
    // const products = await db.product.find();
    // const products = await db.product.find().skip(5)
    // const products = await db.product.find().limit(3).skip(2)
    // const products = await db.product.find().sort({name:-1})
    
    // const products = await db.product.aggregate({
    //   $lookup:{
    //     from:users,
    //     localField:"userID",
    //     forieign

    //   }
    // })

    const datats=await product.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "productsUser"
        }
      }
    ]);


    resp.status(200).json({
      success: true,
      datats,
    });
  } catch (err) {
    console.log("eerr",err)
  }
};
module.exports = getProduct;
