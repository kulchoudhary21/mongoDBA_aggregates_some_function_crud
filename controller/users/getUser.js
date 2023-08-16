const db = require("../../db/db");
const user = db.users;
const getUsers = async (req, resp) => {
  try {
    const users = await user.find()
    resp.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    console.log("eerr",err)
  }
};
module.exports = getUsers;
