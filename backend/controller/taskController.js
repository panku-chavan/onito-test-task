const TaskModel = require("../Model/TaskModel");

const addTaskController = async (req, res) => {
  try {
    const {
      name,
      ID,
      ID_value,
      address,
      blood_group,
      city,
      country,
      age,
      email,
      emergency_contact,
      guardian_label,
      guardian_name,
      martial_status,
      mobile,
      nationality,
      ocupation,
      pincode,
      region,
      sex,
      state,
    } = req.body;
    const data = new TaskModel({
      name: name,
      ID: ID,
      ID_value: ID_value,
      address: address,
      blood_group: blood_group,
      city: city,
      country: country,
      age: age,
      email: email,
      emergency_contact: emergency_contact,
      guardian_label: guardian_label,
      guardian_name: guardian_name,
      martial_status: martial_status,
      mobile: mobile,
      nationality: nationality,
      ocupation: ocupation,
      pincode: pincode,
      region: region,
      sex: sex,
      state: state,
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
