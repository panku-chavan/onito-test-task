const express = require("express");
const {
  gettaskController,
  addTaskController,
} = require("../controller/taskController");

const router = express.Router();

router.get("/get-task", gettaskController);

router.post("/add-task", addTaskController);

module.exports = router;
