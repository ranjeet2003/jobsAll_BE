require("dotenv").config();
const ResultModel = require("../models/results");
require("dotenv").config({ path: "./config.env" });

const postResult = async (req, res, next) => {
  console.log(req.body);
  try {
    const newResult = await ResultModel.create({
      dispHeading: req.body.dispHeading,
      descriptionURL: req.body.descriptionURL,
      postName: req.body.postName,
      postDate: req.body.postDate,
      examDate: req.body.examDate,
      lastDate: req.body.lastDate,
      shortInfo: req.body.shortInfo,
      postNameShortDtl: req.body.postNameShortDtl,
      totalPost: req.body.totalPost,
      eligibility: req.body.eligibility,
      applyLink: req.body.applyLink,
      notificationLink: req.body.notificationLink,
      officialWebsiteLink: req.body.officialWebsiteLink,
      ctc: req.body.ctc,
      hourlyPay: req.body.hourlyPay,
      postDescription: req.body.postDescription,
      skills: req.body.skills,
      applyCriteria: req.body.applyCriteria,
      location: req.body.location,
    });

    res.status(201).json({
      status: "success",
      data: {
        newResult,
      },
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
const getAllResult = async (req, res, next) => {
  let result;
  try {
    result = await ResultModel.find();
  } catch (err) {
    console.log(err);
    return next(err);
  }
  res.status(200).json({ status: "success", data: result });
};

exports.postResult = postResult;
exports.getAllResult = getAllResult;
