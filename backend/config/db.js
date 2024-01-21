import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Newsss", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection successful...");
  } catch (err) {
    console.error("Connection failed:", err);
  }
};

export default connectDB;