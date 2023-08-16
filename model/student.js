const studentModel = (mongoose) => {
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number,
      subject: String,
    });
    const student = new mongoose.model("student", studentSchema);
    return student;
  };
  module.exports = studentModel;
  