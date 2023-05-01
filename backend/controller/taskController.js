const TaskModel = require("../Model/TaskModel");

const addTaskController = async (req, res) => {
  try {
    const { name } = req.body;
    const data = new TaskModel({
      name: name,
    });
    await data.save();
    res.status(200).send({
      success: false,
      messege: "Data successfully added.",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "Error while adding task data",
      error,
    });
  }
};

const gettaskController = async (req, res) => {
  try {
    const data = await TaskModel.find({});
    res.status(200).send({
      success: true,
      messege: "Successfully get the data",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      messege: "error while getting data",
      error,
    });
  }
};

module.exports = { addTaskController, gettaskController };
