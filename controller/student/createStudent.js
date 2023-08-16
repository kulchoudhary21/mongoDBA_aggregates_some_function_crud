const db = require("../../db/db");
const student = db.student;
const createStudent = async (req, resp) => {
  console.log("req.body", req.body);
  const { name, age, subject } = req.body;
if (!name || !age || !subject) {
    resp.status(400).json({
      message: "No data available plzz enter all field...",
      success: false,
    });
  } else {
    const studentss = await student.create(req.body);
    resp.status(201).json({
      message: "student added sucessfully",
      success: true,
    });
  }
};
module.exports = createStudent;
