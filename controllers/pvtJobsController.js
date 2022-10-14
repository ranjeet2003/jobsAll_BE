require("dotenv").config();
const PvtJobsModel = require("../models/PvtJobs");
require("dotenv").config({ path: "./config.env" });

const postJob = async (req, res, next) => {
  console.log(req.body);
  try {
    const newJob = await PvtJobsModel.create({
      dispHeading: req.body.dispHeading,
      descriptionURL: req.body.descriptionURL,
      batch: req.body.batch,
      location: req.body.location,
      ctc: req.body.ctc,
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
    result = await PvtJobsModel.find();
  } catch (err) {
    console.log(err);
    return next(err);
  }
  res.status(200).json({ status: "success", data: result });
};

exports.postJob = postJob;
exports.getAllJob = getAllJob;
