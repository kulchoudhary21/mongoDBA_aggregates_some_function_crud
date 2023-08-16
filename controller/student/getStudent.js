const db = require("../../db/db");
const student=db.student
const getStudent = async (req, resp) => {
  try {
    const datats=await student.find()
    resp.status(200).json({
      success: true,
      datats,
    });
  } catch (err) {
    console.log("eerr",err)
  }
};
module.exports = getStudent;
