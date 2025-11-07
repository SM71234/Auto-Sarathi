// config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  // console.log("🔍 Debug: MONGO_URI =", uri ? "[present]" : uri);

  if (!uri) {
    console.error("❌ No MongoDB URI found in environment variables (process.env.MONGO_URI is undefined).");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri); // ✅ simplified, no deprecated options
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
