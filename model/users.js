const userModel = (mongoose) => {
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
  });
  const user = new mongoose.model("users", userSchema);
  return user;
};
module.exports = userModel;
