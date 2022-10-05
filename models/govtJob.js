const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GovtJobsSchema = new Schema({
  dispHeading: { type: String, required: true },
  descriptionURL: { type: String, required: true },
  postName: { type: String, required: true },
  postDate: { type: String },
  examDate: { type: String },
  shortInfo: { type: String },
  admitCardAvlbl: { type: String },
  Fee: {
    general: { type: String },
    OBC: { type: String },
    SC: { type: String },
    ST: { type: String },
    female: { type: String },
  },
  age: {
    min: { type: String },
    max: { type: String },
  },
  postNameShortDtl: { type: String },
  totalPost: { type: String },
  eligibility: { type: String },
  totalPostCatWise: {
    UR: { type: String },
    BC: { type: String },
    MBC: { type: String },
    EWS: { type: String },
    SC: { type: String },
    ST: { type: String },
    total: { type: String },
  },
  applyLink: { type: String },
  notificationLink: { type: String },
  officialWebsiteLink: { type: String },
});

module.exports = mongoose.model("GovtJobs", GovtJobsSchema);
