const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PvtJobsSchema = new Schema({
  dispHeading: { type: String },
  descriptionURL: { type: String },
  batch: { type: String },
  location: { type: String },
  ctc: { type: String },
  applyLink: { type: String },
  notificationLink: { type: String },
  officialWebsiteLink: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PvtovtJobs", PvtJobsSchema);
