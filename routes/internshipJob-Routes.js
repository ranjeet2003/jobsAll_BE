const express = require("express");

const internshipJobController = require("../controllers/internshipController");

const router = express.Router();

router.post("/postjob", internshipJobController.postJob);
router.get("/getAlljob", internshipJobController.getAllJob);

module.exports = router;
