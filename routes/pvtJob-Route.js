const express = require("express");

const PvtJobsController = require("../controllers/pvtJobsController");

const router = express.Router();

router.post("/postjob", PvtJobsController.postJob);
router.get("/getAlljob", PvtJobsController.getAllJob);

module.exports = router;
