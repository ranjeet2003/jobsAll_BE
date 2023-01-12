const express = require("express");

const AnswerKeysController = require("../controllers/answerKeysController");

const router = express.Router();

router.post("/postjob", AnswerKeysController.postAnswerKey);
router.get("/getAllAnswerkeys", AnswerKeysController.getAllAnswerKeys);

module.exports = router;
