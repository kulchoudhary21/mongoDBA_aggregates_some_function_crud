const db = require("../../db/db");
const classs = db.classs;
const createClasss = async (req, resp) => {
  console.log("req.body", req.body);
  const { name, student } = req.body;
if (!name ) {
    resp.status(400).json({
      message: "No data available plzz enter all field...",
      success: false,
    });
  } else {
    const datass = await classs.create(req.body);
    resp.status(201).json({
      message: "classs added sucessfully",
      success: true,
    });
  }
};
module.exports = createClasss;
