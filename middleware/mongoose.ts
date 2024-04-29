import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);

      console.log("Monogn DB connection successful");
    } else {
      console.error("Missing MONGO_URI environment variable!");
    }
  } catch (error) {
    throw new Error("Error in connecting to MongoDB");
  }
};

export default connectToDb;
