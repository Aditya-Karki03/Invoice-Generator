import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  const dbUri: string = process.env.MONGO_URI || "";
  const options: ConnectOptions = {};
  try {
    await mongoose.connect(dbUri, options);
    console.log("DB connected successfully.");
  } catch (error) {
    console.error("DB connection failed", error);
    throw new Error("Can't connect MongoDB");
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("DB disconnected successfully!");
  } catch (error) {
    console.error("DB disconnection failed", error);
    throw new Error("Can't disconnect MongoDB");
  }
};
export { connectDB, disconnectDB };
