const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv is loaded

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // No options needed in Mongoose 6+
    console.log("MongoDB connection successful!");
  } catch (err) {
    console.error("MongoDB connection failed!", err.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = { connectDB };
