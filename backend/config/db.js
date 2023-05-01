const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    console.log(`Database connected to : ${db.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
