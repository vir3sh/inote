const mongoose = require("mongoose");

async function connectToMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/note");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // handle error
  }
}

module.exports = connectToMongo;
