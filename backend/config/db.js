import mongoose from "mongoose";

const Db_URI = "mongodb://localhost:27017/project_management";

const connectDB = async () => {
  try {
    await mongoose.connect(Db_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;