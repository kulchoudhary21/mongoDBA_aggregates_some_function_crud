const db = require("../../db/db");
const users = db.users;
const createUser = async (req, resp) => {
  console.log("req.body", req.body);
  const { name, age, email } = req.body;
  if (!req.body) {
    resp.status(403).json({
      message: "No data available",
      success: false,
    });
  } else if (!name || !age || !email) {
    resp.status(400).json({
      message: "No data available",
      success: false,
    });
  } else {
    const data = await users.create(req.body);
    resp.status(201).json({
      message: "user added sucessfully",
      success: true,
    });
  }
};
module.exports = createUser;
