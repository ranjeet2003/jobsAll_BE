const express = require("express");

const ResultsController = require("../controllers/resultsCoontroller");

const router = express.Router();

router.post("/postjob", ResultsController.postResult);
router.get("/getAllResult", ResultsController.getAllResult);

module.exports = router;
