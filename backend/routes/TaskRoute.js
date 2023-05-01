const express = require("express");
const {
  gettaskController,
  addTaskController,
  deleteTaskController,
} = require("../controller/taskController");

const router = express.Router();

router.get("/get-task", gettaskController);

router.post("/add-task", addTaskController);

router.delete("/delete-task/:id", deleteTaskController);

module.exports = router;
