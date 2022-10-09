require("dotenv").config();
const GovtJobsModel = require("../models/govtJob");
require("dotenv").config({ path: "./config.env" });

const postJob = async (req, res, next) => {
  console.log(req.body);
  try {
    const newJob = await GovtJobsModel.create({
      dispHeading: req.body.dispHeading,
      descriptionURL: req.body.descriptionURL,
      postName: req.body.postName,
      postDate: req.body.postDate,
      examDate: req.body.examDate,
      lastDate: req.body.lastDate,
      shortInfo: req.body.shortInfo,
      admitCardAvlbl: req.body.admitCardAvlbl,
      Fee: req.body.Fee,
      age: req.body.age,
      postNameShortDtl: req.body.postNameShortDtl,
      totalPost: req.body.totalPost,
      eligibility: req.body.eligibility,
      totalPostCatWise: req.body.totalPostCatWise,
      applyLink: req.body.applyLink,
      notificationLink: req.body.notificationLink,
      officialWebsiteLink: req.body.officialWebsiteLink,
    });

    res.status(201).json({
      status: "success",
      data: {
        newJob,
      },
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
const getAllJob = async (req, res, next) => {
  let result;
  try {
    result = await GovtJobsModel.find();
  } catch (err) {
    console.log(err);
    return next(err);
  }
  res.status(200).json({ status: "success", data: result });
};

exports.postJob = postJob;
exports.getAllJob = getAllJob;
