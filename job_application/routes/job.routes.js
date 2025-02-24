const express = require("express");

const {jobList, jobCreate , jobDelete , jobEdit}  = require("../controller/job.controller");

const router = express.Router();

router.post("/create", jobCreate);

router.get("/list", jobList);

router.patch("/jobEdit", jobEdit);

router.delete("/delete", jobDelete);

module.exports = router;