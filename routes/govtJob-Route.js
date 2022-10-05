const express = require("express");

const GovtJobsController = require("../controllers/govtJobsController");

const router = express.Router();

router.post("/postjob", GovtJobsController.postJob);
router.get("/getAlljob", GovtJobsController.getAllJob);

// router.get("/getgovtjob", usersController.login);

// router.use(usersController.protect);
// router.patch("/updateMyPassword", usersController.updatePassword);

module.exports = router;
