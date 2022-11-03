const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PvtJobsSchema = new Schema({
  dispHeading: { type: String },
  descriptionURL: { type: String },
  postName: { type: String },
  postDate: { type: String },
  examDate: { type: String },
  lastDate: { type: String },
  shortInfo: { type: String },
  postNameShortDtl: { type: String },
  totalPost: { type: String },
  eligibility: { type: String },
  applyLink: { type: String },
  notificationLink: { type: String },
  officialWebsiteLink: { type: String },
  ctc: { type: String },
  hourlyPay: { type: String },
  postDescription: { type: String },
  skills: { type: String },
  applyCriteria: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PvtovtJobs", PvtJobsSchema);
