const classModel = (mongoose) => {
    const classSchema = new mongoose.Schema({
      name: String,
      test:{type:"ObjectId",ref:'product'},
      student:[{type:"ObjectId",ref:'student'}],
      stud:[]
    });
    const classs = new mongoose.model("classs", classSchema);
    return classs;
  };
  module.exports = classModel;  
  