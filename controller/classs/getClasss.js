const db = require("../../db/db");
const classs = db.classs;
const getClasss = async (req, resp) => {
  try {
    // const datats = await classs.find();

    //------------------populate------------------------------------------------------------
    // const datats = await classs
    //   .find({
    //     stud: { $elemMatch: { name:'kuldeep'} },
    //   })
    //   .populate("test");
    //---------------------------------------------------------------------------------------

    //-----------------------distinct--------------------------------------------------------
    //  const datats = await classs.distinct('name');
    //---------------------------------------------------------------------------------------

    //----------------------count------------------------------------------------------------
    // const datats = await classs.find({stud:{name:"kuldeep"}}).count()
    //---------------------------------------------------------------------------------------

    ///-------$match aggregate - stage1-----------
    // const datats = await db.student.aggregate([
    //   {
    //     $match: {
    //       age: { $lte: 23 },
    //     },
    //   },
    // ]);
    //---------------------------------------------------------------------------------------

    //-------------------$group aggregate - stage2-------------------------------------------
    //single grouping
    // const datats = await db.student.aggregate([
    //   {
    //     $group: {
    //       _id: "$subject",
    //       totalSum: { $sum: "$age" },
    //       avg: { $avg: "$age" },
    //     },
    //   },
    // ]);

    //multiple grouping
    // const datats = await db.student.aggregate([
    //   {
    //     $group: {
    //       _id: {subject:"$subject",age:"$age"},
    //       totalSum: { $sum: "$age" },
    //       avg: { $avg: "$age" },
    //     },
    //   },
    // ])
    //---------------------------------------------------------------------------------------

    //----------------------skip and sort aggregate------------------------------------------
    // const datats = await db.student.aggregate([
    //   { $group: { _id: "$subject" } },
    //   { $skip: 1 },
    //   { $sort: { _id: 1 } },
    // ]);
    //---------------------------------------------------------------------------------------

    //---------------------project aggregate-------------------------------------------------
    //match and project
    // const datats = await db.student.aggregate([
    //   { $match: { age: { $lte: 23 } } },
    //   { $project: { name: 1, age: 1,_id:0 } },
    // ]);
    //alias with mail
    // const datats = await db.student.aggregate([
    //   { $match: { age: { $lte: 23 } } },
    //   { $project: { name: 1, StudentAge: "$age", _id: 0 } },
    // ]);
    //$type aggregate
    // const datats = await db.student.aggregate([
    //   { $match: { age: { $lte: 23 } } },
    //   {
    //     $project: {
    //       name: 1,
    //       StudentAge: { $type: "$age" },
    //       subjectType: { $type: "$subject" },
    //       _id: 0,
    //     },
    //   },
    // ]);
    //---------------------------------------------------------------------------------------

    //----------------------count aggregate--------------------------------------------------
    // const datats = await db.student.aggregate([
    //   { $match: { age: { $lte: 24 } } },
    //   {$count:"TotalCounts"},

    // ]);
    //---------------------------------------------------------------------------------------

    //----------------------limit aggregate--------------------------------------------------
    // const datats = await db.student.aggregate([
    //   { $match: { age: { $lte: 24 } } },
    //   { $project: { name: 1, age: 1 } },
    //   { $limit:2 },
    //   {$count:"counts"}
    // ]);

    // const datats = await db.student.aggregate([
    //   {$limit:2},
    //   { $group: { _id: "$subject" } },
    //   {$skip:1}
    // ]);
    //---------------------------------------------------------------------------------------

    //----------------------$unwind aggregate------------------------------------------------

    // const datats=await db.classs.find()
    // const datats = await db.classs.aggregate([
    //   { $unwind: "$stud" },
    //   { $group: { _id: "$stud" } },
    // ]);
    //---------------------------------------------------------------------------------------

    //----------------------$macth and $group in stages .... aggregate-----------------------------------------

    // const datats = await db.student.aggregate([
    //   { $match: { age: { $lte: 24 } } },
    //   {
    //     $group: {
    //       _id: { subject: "$subject", age: "$age" },
    //       totalSum: { $sum: "$age" },
    //       avgg:{$avg:"$age"}
    //     },
    //   },
    //   { $match: { totalSum: {$gte:24} } },
    // ]);
    //---------------------------------------------------------------------------------------

    //----------------------$out aggregate------------------------------------------------

    // const datats = await db.student.aggregate([
    //   {
    //     $group: {
    //       _id: { subject: "$subject", age: "$age", totalSum: { $sum: "$age" } },
    //     },
    //   },
    //   { $out: "infoAge" },
    // ]);

    const datats = await db.classs.aggregate([
      { $unwind: "$stud" },
      { $project: { stud: 1, _id: 0 } },
      {
        $replaceRoot: { newRoot: "$stud" },
      },
      // { $match: { stud: { $nin:  } } },
      // {
      //   $group: {
      //     _id: { user: "$stud" },
      //   },
      // },
    ]);
    // const datats=await classs.find({})
    //---------------------------------------------------------------------------------------

    resp.status(200).json({
      success: true,
      datats,
    });
  } catch (err) {
    console.log("eerr", err);
  }
};
module.exports = getClasss;
