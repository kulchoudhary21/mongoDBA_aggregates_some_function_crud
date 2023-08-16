const db = require("../../db/db");
const classs = db.classs;
const updateClasss = async (req, resp) => {
  try {
    // const datats=await classs.findOneAndUpdate(
    //   { _id: req.params.id },
    //   { $push: { test: req.body.studentId } },
    //   { new: true }
    // );
    // const datats=await classs.findOneAndUpdate(
    //   { _id: req.params.id },
    //   { $set: { test: req.body.studentId } },
    //   { new: true }
    // );

    const datats = await classs.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { stud: {name:req.body.name} } },
      { new: true }
    );
    resp.status(200).json({
      success: true,
      datats,
    });
  } catch (err) {
    console.log("update class", err);
  }
};
module.exports = updateClasss;
